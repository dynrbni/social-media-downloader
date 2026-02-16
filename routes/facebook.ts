import express from "express";
import { facebookController } from "../controllers/facebook";

const router = express.Router();

router.post("/facebook", facebookController);

export default router;