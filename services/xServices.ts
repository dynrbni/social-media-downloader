export const xServices = async (url: string) => {
  try {
    const { snapsave } = await import("snapsave-media-downloader");

    const result = await snapsave(url);

    if (!result.success) {
      throw new Error(result.message);
    }

    return result.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
