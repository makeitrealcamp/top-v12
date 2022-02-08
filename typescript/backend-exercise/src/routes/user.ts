import express from 'express'; 
import { show, list, create } from '../controllers/user.controller';
const router = express.Router();

router.route("/:userId").get(show);
router.route("/").get(list);
router.route("/").post(create);

export default router;
