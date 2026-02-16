import express from 'express';
import { xController } from '../controllers/x';

const router = express.Router();

router.post('/x', xController);

export default router;