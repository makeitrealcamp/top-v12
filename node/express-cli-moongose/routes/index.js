var express = require('express');
var router = express.Router();
var Article = require('../model/article.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express test' });
});

router.get('/api/articles', async function (req, res) {
  const articles = await Article.find({});
  res.json(articles);
});

router.post('/hello', (req, res) => {
  res.send("La informacion se envio exitosamente");
});

module.exports = router;
