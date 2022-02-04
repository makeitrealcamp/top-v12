const express = require("express");
const cors = require("cors");
const { connect } = require("./src/db");
const userRouter = require("./src/routes/user");
const postRouter = require("./src/routes/post");

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
