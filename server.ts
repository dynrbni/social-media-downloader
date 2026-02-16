import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import tiktokRoutes from './routes/tiktok';
import instagramRoutes from './routes/instagram';
import xRoutes from './routes/x';
import youtubeRoutes from './routes/youtube'; // Import router YouTube

dotenv.config(); 
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// route api smua platform sosial media
app.use('/api', tiktokRoutes);
app.use('/api', instagramRoutes);
app.use('/api', xRoutes);
app.use('/api', youtubeRoutes); // Import dan gunakan router YouTube

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(PORT, () => {
  console.log(`API Running on PORT ${PORT}`);
});
