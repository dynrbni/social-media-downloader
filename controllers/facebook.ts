import {facebookServices} from "../services/facebookServices";
import { Request, Response } from 'express';

export const facebookController = async (req: Request, res: Response) => {
    try {
        const { url } = req.body;
        if(!url || typeof url !== 'string' ){
            return res.status(400).json({
                error: "URL is required and must be a string"
            })
        }
        const result = await facebookServices(url);
        res.json(result);
    } catch (error) {
        console.error("Error processing Facebook URL:", error);
        res.status(500).json({
            error: "Failed to process Facebook URL"
        })
    }
}