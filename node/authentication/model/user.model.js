const { model, Schema, models } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  email: {
    type: String,
    validate: {
      validator: async function(email) {
        const user = await models.User.findOne({ email });
        return !user ? true : false;
      },
      message: props => `This ${props.value} is already in use!`
    },
    required: [true, 'User email is required'],
  },
  password: String,
}, {
  timestamps: true,
});

userSchema.pre('save', async function() {
  if(this.password && this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
})

var User = model("User", userSchema);
module.exports = User;
