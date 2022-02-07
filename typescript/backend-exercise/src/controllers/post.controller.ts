import { Request, Response } from 'express';
import Post from "../models/post.model";
import User from "../models/user.model";

export async function create(req: Request, res: Response): Promise<void> {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      throw new Error("Invalid user");
    }

    const post = await Post.create({ ...req.body, author: user.id });

    // Si tengo una referencia puedo hacer push para poder popular el post desde user
    // user.posts.push(post);
    await user.save({ validateBeforeSave: false });

    res.status(201).json(post);
  } catch (error: any) {
    console.log("err", error);
    res
      .status(400)
      .json({ message: error.message, error: "User does not exist" });
  }
}

export async function list(req: Request, res: Response): Promise<void> {
  try {
    const posts = await Post.find();

    if (!posts) {
      throw new Error("Post not found");
    }

    res.status(200).json({ message: "Posts list found", data: posts });
  } catch (error) {
    console.log("err", error);
    res.status(404).json({ message: "Posts not found" });
  }
}
