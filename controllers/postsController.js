const { success } = require("../utils/responseWrapper");

const getAllPostsController = async (req, res) => {
  console.log(req._id);
  // return res.send("These are all the posts");
  return res.send(success(200, "These are all the posts"));
};

module.exports = {
  getAllPostsController,
};
