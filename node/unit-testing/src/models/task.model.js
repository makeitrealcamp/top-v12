const { Schema, model, models } = require("mongoose");

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    done: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "you should be logged to create a task"],
    },
  },
  {
    timestamps: true,
  }
);

taskSchema.pre("save", async function () {
  if (this.user && this.isModified("user")) {
    const user = await models.User.findById(this.user);
    user.tasks.push(this);
    await user.save({ validateBeforeSave: false });
  }
});

const Task = model("Task", taskSchema);

module.exports = Task;
