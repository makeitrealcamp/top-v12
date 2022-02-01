var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Connection to mongo
mongoose.connect('mongodb://localhost:27017/mongo-test', { useNewUrlParser: true });
mongoose.connection.on('error', function(e) { console.error(e); });

//Schema definition
var articleSchema = mongoose.Schema({
  title: String,
  body: String,
  published: { type: Boolean, default: false }
});

// definimos el modelo
var Article = mongoose.model("Article", articleSchema);

//Creacion
// var first = new Article({ title: "Articulo 1", body: "Cuerpo del articulo" });
// first.save(function(err) {
//   if (err) return console.error(err);
// });

// Article.create({ title: "Articulo 2", body: "Cuerpo del articulo" }, function(err) {
//   if (err) return console.error(err);
// });

// Read
// Article.find().limit(2).exec(function(err, articles) {
//   if (err) return console.error(err);
//   console.log(articles);
// });

Article.findById('61f8770a3c5c40a3b3dc4f4e', function(err, article) {
  if (err) return console.error(err);

  article.title = "Otro articulo 2";
  article.save(function(err) {
    if (err) return console.error(err);
  });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
