import { model, Schema, Document } from "mongoose";
import { UserInterface } from './user.model';

export interface PostInterface extends Document {
  title: string;
  body: string;
  published: boolean;
  author: UserInterface['_id'];
}

const postSchema = new Schema(
  {
    title: String,
    body: String,
    published: Boolean,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = model<PostInterface>("Post", postSchema);

export default Post;
