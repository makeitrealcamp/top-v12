import express from 'express'; 

const userController = require("../controllers/user.controller");
const router = express.Router();

router.route("/:userId").get(userController.show);
router.route("/").get(userController.list);
router.route("/").post(userController.create);

export default router;
