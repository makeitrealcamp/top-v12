var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express test' });
});

router.post('/hello', (req, res) => {
  res.send("La informacion se envio exitosamente");
});

module.exports = router;
