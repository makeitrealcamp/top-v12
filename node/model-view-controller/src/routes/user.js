const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.route("/:userId").get(userController.show);
router.route("/").get(userController.list);
router.route("/").post(userController.create);
router.route("/signin").post(userController.signin);

module.exports = router;
