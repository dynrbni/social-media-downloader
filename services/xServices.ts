import rahadMedia from "rahad-media-downloader";

export const xServices = async (url: string) => {
    try {
        const result = await rahadMedia.twitter(url);
        return result;
    } catch (error) {
        console.error("Error downloading Twitter video:", error);
        throw error;
    }
};