import { Response, Request } from 'express';
import { youtubeServices } from '../services/youtubeServices';

export const youtubeController = async (req: Request, res: Response) => {
    const { url } = req.body;

    if (!url || typeof url !== 'string') {
        return res.status(400).json({ error: 'URL is required and must be a string' });
    }

    try {
        const result = await youtubeServices(url);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to process the YouTube URL' });
    }
}