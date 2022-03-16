const router = require('express').Router();
const userController = require('../controllers/user.controller');
const { auth } = require('../utils/auth');

router.route('/sign-up').post(userController.signup);
router.route('/sign-in').post(userController.signin);
router.route('/').get(auth, userController.show);
router.route('/').put(auth, userController.update);
router.route('/').delete(auth, userController.destroy);

module.exports = router;
