import express from 'express'; 
import { create, list } from '../controllers/post.controller';
const router = express.Router();


router.route("/").get(list);
router.route("/:userId").post(create);

export default router;
