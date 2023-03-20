const requireUser = require("../middlewares/requireUser");
const UserController = require("../controllers/userController");
const router = require("express").Router();

router.post(
  "/follow",
  requireUser,
  UserController.followOrUnfollowUserController
);
router.get(
  "/getPostsOfFollowing",
  requireUser,
  UserController.getPostsOfFollowing
);
router.get("/getMyPosts", requireUser, UserController.getMyPosts);

module.exports = router;
