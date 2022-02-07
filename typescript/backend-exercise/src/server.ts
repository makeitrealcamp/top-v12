import express from 'express';
import cors from 'cors';
import { connect } from './db';
import userRouter from './routes/user';
import postRouter from './routes/post';

const port = 8000;
const app = express();
connect();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
