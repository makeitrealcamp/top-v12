const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

module.exports = {
  async signup(req, res) {
    console.log("req", req);
    try {
      const user = await User.create(req.body);

      const token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: "1d",
      });

      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  async signin(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
        throw Error("Invalid email or password");
      }

      const isValid = await bcrypt.compare(req.body.password, user.password);

      if (!isValid) {
        throw Error("Invalid email or password");
      }

      const token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: "1d",
      });

      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
