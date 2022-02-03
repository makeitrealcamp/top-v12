'use strict';

const { model, Schema } = require("mongoose");

//Schema definition
var articleSchema = Schema({
  title: String,
  body: String,
  published: { type: Boolean, default: false }
});

// Atributos virtuales
articleSchema.virtual("titleBody")
    .get(function() { return this.title + " " + this.body })
    .set(function(v) {
      this.title = v.substr(0, v.indexOf(" "));
      this.body = v.substr(v.indexOf(" ") + 1);
});

// Metodo estatico
articleSchema.statics.findByTitle = function(name, cb) {
  return this.find({ title: new RegExp(name, 'i') }, cb);
};

articleSchema.methods.wordCount = function() {
  return this.body.split(" ").length;
};

// definimos el modelo

//Creacion
// Metodo de instancia
// var first = new Article({ title: "Articulo 1", body: "Cuerpo del articulo" });
// console.log('atributo virtual', first.titleBody);
// console.log('contador', first.wordCount());

// Article.findByTitle("1", function(err, articles) {
//   if (err) return console.error(err);
//   console.log('articles', articles);
// });
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

// Article.findById('61f8770a3c5c40a3b3dc4f4e', function(err, article) {
//   if (err) return console.error(err);

//   article.title = "Otro articulo 2";
//   article.save(function(err) {
//     if (err) return console.error(err);
//   });
// });

var Article = model("Article", articleSchema);
module.exports = Article;
