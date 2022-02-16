const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const User = require("../models/user.models");

// Recuerden dejar almacenada está variable como una variable de entorno
const SECRET = "secret_key";

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
      const encryptPassword = await bcrypt.hash(password, 8);

      const user = await User.create({ email, password: encryptPassword });

      console.log("here", user);
      const token = jwt.sign({ id: user._id }, SECRET, {
        expiresIn: 60 * 60 * 24,
      });
      console.log("token", token);
      res.status(201).json({ token });
    } catch (error) {
      res.status(404).json({ message: "User not found" });
    }
  },
  async signin(req, res) {
    try {
      // const { email, password } = req.body;

      const { token } = req.body;

      const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID,
      });

      const { email } = ticket.getPayload();

      let user = await User.findOne({ email });

      if (!user) {
        user = await User.create({ email });
        // throw new Error("User or password does not valid");
      }

      // const isPasswordValid = await bcrypt.compare(password, user.password);

      // if (!isPasswordValid) {
      //   throw new Error("User or password does not valid");
      // }

      const tokenJWT = jwt.sign({ id: user._id }, SECRET, {
        expiresIn: 60 * 60 * 24,
      });

      res.status(201).json({ tokenJWT });
    } catch (error) {
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
