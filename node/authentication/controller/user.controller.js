const User = require('../model/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signup = async function (req, res) {
  try {
    const { body } = req;
    const user = await User.create(body);
    const token = jwt.sign(
      { userId: user._id },
      process.env.SECRET_KEY,
      { expiresIn: "7d" }
    );

    res.status(201).json({ token });
  } catch(error) {
    res.status(400).json({ message: error.message });
  }
}

const signin = async function(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isValid = await bcrypt.compare(password, user?.password);

    if(!user || !isValid) {
      throw new Error('Contraseña o correo invalido');
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.SECRET_KEY,
      { expiresIn: "7d" }
    );

    res.status(201).json({ token });
  } catch(error) {
    res.status(400).json({ message: error.message });
  }
}

const getProfile = async function (req, res) {
  try {
    const { user } = req;
    const profile = await User.findById(user).select('-password');
    res.status(200).json(profile);
  } catch(error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = {
  signup,
  signin,
  getProfile
};
