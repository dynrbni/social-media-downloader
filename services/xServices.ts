const { alldl } = require('rahad-all-downloader');

export const xServices = async (url: string) => {
    try {
        const result = await alldl(url);
        return result;
    } catch (error) {
        console.error("Error downloading Twitter video:", error);
        throw error;
    }
};