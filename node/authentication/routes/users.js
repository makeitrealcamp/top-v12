var express = require('express');
var router = express.Router();
const { signup, signin, getProfile } = require('../controller/user.controller');
const { auth } = require('../utils/middlewares');

/* GET users listing. */
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', auth, getProfile);

module.exports = router;
