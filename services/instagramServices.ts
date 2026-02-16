const { alldl } = require('rahad-all-downloader-v2');

export const instagramServices = async (url: string) => {
    try {
        const result = await alldl(url);
        return result;
    } catch (error) {
        throw error;
    }
}