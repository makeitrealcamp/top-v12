const { Schema, model, models } = require("mongoose");
const bcrypt = require("bcrypt");
const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "email is required"],
      minLength: [4, "Email is too short!"],
      maxLength: 15,
      match: [emailRegex, "email is not valid"],
      validate: {
        async validator(email) {
          const user = await models.User.findOne({ email });
          return !user;
        },
        message: "email already exists",
      },
    },
    password: {
      type: String,
      required: true,
    },
    tasks: {
      type: [{ type: Schema.Types.ObjectId, ref: "Task" }],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function () {
  if (this.password && this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
});

const User = model("User", userSchema);

module.exports = User;
