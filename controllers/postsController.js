const Post = require("../models/Post");
const User = require("../models/User");
const { success, error } = require("../utils/responseWrapper");

const getAllPostsController = async (req, res) => {
  console.log(req._id);
  // return res.send("These are all the posts");
  return res.send(success(200, "These are all the posts"));
};

const createPostController = async (req, res) => {
  try {
    const { caption } = req.body;
    const owner = req._id;

    const user = await User.findById(req._id);

    const post = await Post.create({
      owner,
      caption,
    });

    user.posts.push(post._id);
    await user.save();

    return res.send(success(201, post));
  } catch (e) {
    return res.send(error(500, e.message));
  }
};

const likeAndUnlikePost = async (req, res) => {
  try {
    const { postId } = req.body;
    const curUserId = req._id;

    const post = await Post.findById(postId);
    if (!post) {
      return res.send(error(404, "post not found"));
    }

    if (post.likes.includes(curUserId)) {
      const index = post.likes.indexOf(curUserId);
      post.likes.splice(index, 1);

      await post.save();
      return res.send(success(200, "Post Unliked"));
    } else {
      post.likes.push(curUserId);
      await post.save();
      return res.send(success(200, "Post Liked"));
    }
  } catch (e) {
    return res.send(error(500, e.message));
  }
};

module.exports = {
  getAllPostsController,
  createPostController,
  likeAndUnlikePost,
};
