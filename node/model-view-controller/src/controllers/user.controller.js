const User = require("../models/user.models");

module.exports = {
  async show(req, res) {
    try {
      const { userId } = req.params;
      // Uso del populate cuando ya tengo una referencia desde el modelo y quiero acceder
      // a algunos campos de esa referencia
      const user = await User.findById(userId).populate({
        path: "posts",
        select: "title",
      });
      // const user = await User.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }
      res.status(200).json({ message: "User found", data: user });
    } catch (error) {
      console.log("err", error);
      res.status(404).json({ message: "User not found" });
    }
  },
  async create(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.create({ email, password });
      res.status(201).json({ data: user });
    } catch (error) {
      console.log("error", error);
      res.status(404).json({ message: "User not found" });
    }
  },
  async list(req, res) {
    try {
      // Uso del aggregate para unir tablas y crear una referencia en el documento
      // const users = await User.aggregate([
      //   {
      //     $lookup: {
      //       from: "posts",
      //       localField: "_id",
      //       foreignField: "author",
      //       as: "posts",
      //     },
      //   },
      //   {
      //     $project: {
      //       _id: 1,
      //       title: 1,
      //       body: 1,
      //       posts: 1,
      //     },
      //   },
      // ]);
      const users = await User.find();

      if (!users) {
        throw new Error("Client not found");
      }

      res.status(200).json({ message: "Users list found", data: users });
    } catch (error) {
      console.log("err", error);
      res.status(404).json({ message: "User not found" });
    }
  },
};
