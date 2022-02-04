const Post = require("../models/post.models");
const User = require("../models/user.models");

module.exports = {
  async create(req, res) {
    try {
      const { userId } = req.params;

      const user = await User.findById(userId);

      if (!user) {
        throw new Error("Invalid user");
      }

      const post = await Post.create({ ...req.body, author: user.id });

      // Si tengo una referencia puedo hacer push para poder popular el post desde user
      // user.posts.push(post);
      await user.save({ validateBeforeSave: false });

      res.status(201).json(post);
    } catch (error) {
      console.log("here", error);
      res
        .status(400)
        .json({ message: error.message, error: "User does not exist" });
    }
  },
  async list(req, res) {
    try {
      const posts = await Post.find();

      if (!posts) {
        throw new Error("Post not found");
      }

      res.status(200).json({ message: "Posts list found", data: posts });
    } catch (error) {
      console.log("err", error);
      res.status(404).json({ message: "Posts not found" });
    }
  },
};
