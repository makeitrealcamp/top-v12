import mongoose from 'mongoose';

export async function connect(): Promise<void> {
  mongoose.connect("mongodb://localhost:27017/references");

  mongoose.connection.once("open", () => {
    console.log("Connection established successfully");
  });
}
