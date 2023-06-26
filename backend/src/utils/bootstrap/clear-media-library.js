async function clearMediaLibrary() {
  try {
    console.log("Clearing Media Library started");

    const files = await strapi
      .service("plugin::upload.upload")
      .findMany({ populate: "*", _limit: -1 });

    const unlinkedFiles = files.filter((file) => !file.related.length);
    for (const unlinkedFile of unlinkedFiles) {
      const deletedFile = await strapi
        .service("plugin::upload.upload")
        .remove(unlinkedFile);
    }

    console.log("Clearing Media Library finished");
  } catch (error) {
    console.log("🚀 ~ clearMediaLibrary ~ error:", error);
  }
}

module.exports = clearMediaLibrary;
