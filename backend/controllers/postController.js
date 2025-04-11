const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const sharp = require("sharp");
const { uploadToCloudinary, cloudinary } = require("../utils/cloudinary");
const Post = require("../models/postModel");

exports.createPost = catchAsync(async (req, res, next) => {
  const { caption } = req.body;
  const image = req.file;
  const userId = req.user._id;

  if (!image) return next(new AppError("image is required for the post", 400));

  // optimize the image
  const optimizedImageBuffer = await sharp(image.buffer)
    .resize({ width: 800, height: 800, fit: "inside" })
    .toFormat("jpeg", { quality: 80 }.toBuffer());
  const fileUri = `data:image/jpeg;base64,${optimizedImageBuffer.toString(
    "base64"
  )}`;
  const cloudResponse = await uploadToCloudinary(fileUri);

  let post = await Post.create({
    caption,
    image: {
      url: cloudResponse.secure_url,
      publicId: cloudResponse.public_id,
    },
    user: userId,
  });

  // add post to users posts
  const user = await User.findById(userId);
  if (user) {
    user.posts.push(post.id);
    await user.save({ validateBeforeSave: false });
  }
  post = await post.populate({
    path: "user",
    select: "username email bio profilePicture",
  });
  return res.status(201).json({
    status: "Success",
    message: "Post Created",
    data: {
      post,
    },
  });
});

exports.getAllPost = catchAsync(async (req, res, next) => {
  const posts = await Post.find()
    .populate({
      path: "user",
      select: "username profilePicture bio",
    })
    .populate({
      path: "comments",
      select: "text user",
      populate: {
        path: "user",
        select: "username profilePicture",
      },
    })
    .sort({ createdAt: -1 });

  return res.status(200).json({
    status: "Success",
    results: posts.length,
    data: {
      posts,
    },
  });
});

exports.getUserPosts = catchAsync(async (req, res, next) => {
  const userId = req.params.id;

  const posts = await Post.find({ user: userId })
    .populate({
      path: "comments",
      select: "text user",
      populate: {
        path: "user",
        select: "username profilePicture",
      },
    })
    .sort({ createdAt: -1 });

  return res.status(200).json({
    status: "Success",
    result: posts.length,
    data: {
      posts,
    },
  });
});

exports.saveOrUnSavePost = catchAsync(async (req, res, next) => {
  const userId = req.user._id;
  const postId = req.params.postId;

  const user = await User.findById(userId);
  if (!user) return next(new AppError("User not found", 404));

  const isPostSave = user.savedPosts.includes(postId);
  if (isPostSave) {
    user.savedPosts.pull(postId);
    await user.save({ validateBeforeSave: false });
    return res.status(200).json({
      status: "success",
      message: "post unsaved successfully",
      data: {
        user,
      },
    });
  } else {
    user.savedPosts.push(postId);
    await user.save({ validateBeforeSave: false });
    return res.status(200).json({
      status: "success",
      message: "Post Saved successfully",
      data: {
        user,
      },
    });
  }
});

exports.deletePost = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user._id;

  const post = await Post.findById(id).populate("user");
  if (!post) {
    return next(new AppError("Post not found", 404));
  }
  if (post.user.id.toString() !== userId.toString()) {
    return next(
      new AppError("You are not authorized to delete this post", 403)
    );
  }
  //remove the post from user posts
  await User.updateOne({ _id: userId }, { $pull: { posts: id } });
  //remove this post from users save list
  await User.updateMany({ savedPosts: id }, { $pull: { savedPosts: id } });
  //remove the comments of this post
  await Comment.deleteMany({ post: id });

  //remove image from cloudinary
  if (post.image.publicId) {
    await cloudinary.uploader.destroy(post.image.publicId);
  }
  // remove the post
  await Post.findByIdAndDelete(id);
  res.status(200).json({
    status: "success",
    message: "Post deleted successfully",
  });
});
