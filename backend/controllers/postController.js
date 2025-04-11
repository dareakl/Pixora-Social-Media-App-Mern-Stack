const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const sharp = require("sharp");
const { uploadToCloudinary } = require("../utils/cloudinary");
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
