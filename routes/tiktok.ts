import express from 'express';
import { tiktokController } from '../controllers/tiktok';
const router = express.Router();

router.post('/tiktok', tiktokController);

export default router;