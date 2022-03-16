const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
  },
  rolDeveloper: {
    type: String,
  },
  job: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

const User = model('User', userSchema);

module.exports = User;
