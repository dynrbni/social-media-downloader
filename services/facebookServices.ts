const { alldl } = require('rahad-all-downloader-v2');

//sementara baru bisa donwload video aja blom bisa download foto
export const facebookServices = async (url:string) => {
    try {
        const result = await alldl.fb(url);
        return result;
    } catch (error) {
        console.error("Error downloading Facebook video:", error);
        throw error;
    }
}