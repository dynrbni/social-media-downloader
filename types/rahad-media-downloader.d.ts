declare module "rahad-media-downloader" {
  const rahadMedia: {
    twitter: (url: string) => Promise<any>;
    instagram: (url: string) => Promise<any>;
    tiktok: (url: string) => Promise<any>;
  };

  export default rahadMedia;
}
