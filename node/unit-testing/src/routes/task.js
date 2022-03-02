const router = require("express").Router();
const taskController = require("../controllers/task.controller");
const { auth } = require("../utils/middlewares");

router.use(auth);
router.route("/").get(taskController.list);
router.route("/").post(taskController.create);
router.route("/:id").get(taskController.show);
router.route("/:id").put(taskController.update);
router.route("/:id").delete(taskController.delete);

module.exports = router;
