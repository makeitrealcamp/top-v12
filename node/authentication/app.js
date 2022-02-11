const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require('cors')
const { auth } = require('./utils/middlewares');
const usersRouter = require("./routes/users");
const app = express();

require('dotenv').config();

// Connection to mongo
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/auth-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", function (e) {
  console.error(e);
});

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get('/', auth, (req, res) => {
  res.status(200).json({ message: 'estás autenticado' });
});
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log('catch 404');
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = err;

  // render the error page
  res.status(err.status).json({ message: err.message });
});

module.exports = app;
