const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.route("/signup").post(userController.signup);
router.route("/signin").post(userController.signin);

module.exports = router;
