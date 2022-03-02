require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const userRouter = require("./routes/user");
const taskRouter = require("./routes/task");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/users", userRouter);
app.use("/tasks", taskRouter);

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

module.exports = app;
