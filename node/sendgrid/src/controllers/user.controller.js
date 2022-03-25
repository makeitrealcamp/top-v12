const User = require("../models/user.model");
const { sendMail } = require("../utils/welcomeMail");
const { recoveryPassword } = require("../utils/passwordRecovery");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  async signup(req, res) {
    try {
      const { name, email, password } = req.body;
      const encPassword = await bcrypt.hash(password, 8);
      const user = await User.create({ name, email, password: encPassword });
      const token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24,
      });

      await sendMail(user);

      res.status(201).json({ token });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async signin(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("User or password invalid");
      }
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        throw new Error("User or password invalid");
      }
      const token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24,
      });
      res.status(201).json({ token });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async show(req, res) {
    try {
      const user = await User.findById(req.user);

      if (!user) {
        throw new Error("User not found");
      }
      res.status(200).json({ message: "User found", data: user });
    } catch (error) {
      res.status(404).json({ message: "User not found" });
    }
  },

  async update(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.user, req.body, {
        new: true,
        useFindAndModify: false,
      });

      if (!user) {
        throw new Error("Could not update that user");
      }

      res.status(200).json({ message: "User updated", data: user });
    } catch (error) {
      res.status(400).json({ message: "User could not be updated" });
    }
  },

  async destroy(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.user);

      if (!user) {
        throw new Error("Could not delete that user");
      }

      res.status(200).json({ message: "User deleted", data: user });
    } catch (err) {
      res.status(400).json({ message: "User could not be deleted" });
    }
  },

  async recoveryPassword(req, res) {
    try {
      const { email } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        throw new Error("User not found");
      }

      const token = jwt.sign({ email }, process.env.SECRET, {
        expiresIn: "15m",
      });

      await recoveryPassword(email, token);

      res.status(201).json({ message: "Email sent" });
    } catch (err) {
      res.status(400).json({ message: "User could not be found" });
    }
  },

  async resetPassword(req, res) {
    try {
      const { newPassword, email } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        throw new Error("User not found");
      }

      const encPassword = await bcrypt.hash(newPassword, 8);

      await User.findByIdAndUpdate(
        user._id,
        { password: encPassword },
        {
          new: true,
          useFindAndModify: false,
        }
      );

      console.log("controllador", user);
      res.status(201).json({ message: "Password updated" });
    } catch (err) {
      res.status(400).json({ message: "Password could not be update" });
    }
  },
};
