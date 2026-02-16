import express from "express";
import { youtubeController } from "../controllers/youtube"

const router = express.Router();

router.post('/youtube', youtubeController);

export default router;