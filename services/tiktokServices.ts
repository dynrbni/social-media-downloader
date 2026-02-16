import { Downloader } from "@tobyg74/tiktok-api-dl";

export const tiktokServices = async (url: string) => {
    try {
        const result = await Downloader(url);
        return result;
    } catch (error) {
        throw error;
    }
}