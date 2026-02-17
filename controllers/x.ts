import express  from "express";
import { xServices } from "../services/xServices";

export const xController = async (req: express.Request, res: express.Response) => {
    const { url } = req.body;
    if (!url || typeof url !== 'string') {
        return res.status(400).json({ error: 'URL is required and must be a string' });
    }
    try {
        const result = await xServices(url);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to process the X/Twitter URL' });
    }
}