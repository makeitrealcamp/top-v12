import { model, Schema, Document } from "mongoose";
import { PostInterface } from './post.model';

export interface UserInterface extends Document {
  email: string;
  password: string;
  posts: PostInterface['_id'];
}

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

const User = model<UserInterface>('User', userSchema);

export default User;
