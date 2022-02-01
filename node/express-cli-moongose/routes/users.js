var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const name = req?.query?.name;
  res.send(`Hola ${name}`);
});

module.exports = router;
