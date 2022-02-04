const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    posts: {
      type: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
