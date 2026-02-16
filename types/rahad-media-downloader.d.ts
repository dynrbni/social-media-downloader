declare module 'rahad-all-downloader' {
    const rahad: {
        alldl: (url: string) => Promise<any>;
    };
    export default rahad;
}