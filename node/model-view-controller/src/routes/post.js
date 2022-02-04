const router = require("express").Router();
const postController = require("../controllers/post.controller");

router.route("/").get(postController.list);
router.route("/:userId").post(postController.create);

module.exports = router;
