const express = require("express");
const isAuthenticated = require("../middleware/isAuthenticated");
const upload = require("../middleware/multer");
const { createPost, getAllPost } = require("../controllers/postController");

const router = express.Router();

//define routes
router.post(
  "/create-post",
  isAuthenticated,
  upload.single("image"),
  createPost
);

router.get("/all", getAllPost);

module.exports = router;
