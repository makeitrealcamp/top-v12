const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.models");

module.exports = {
  async signup(req, res) {
    try {
      const { email, password } = req.body;
      const encPassword = await bcrypt.hash(password, 8);
      const user = await User.create({ email, password: encPassword });
      console.log("here", user);
      const token = jwt.sign({ id: user._id }, SECRET, {
        expiresIn: 60 * 60 * 24,
      });

      res
        .status(200)
        .json({ message: "User created successfully", token: token });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};
