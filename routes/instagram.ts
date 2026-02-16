import express from 'express';
import { instagramController } from "../controllers/instagram";
const router = express.Router();

router.post('/instagram', instagramController);

export default router;
