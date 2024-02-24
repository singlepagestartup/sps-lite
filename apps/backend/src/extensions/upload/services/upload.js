const fs = require("fs");
const { Readable } = require("stream");
const { ApplicationError } = require("@strapi/utils").errors;

module.exports = {
  async enhanceAndValidateFile(file, fileInfo = {}, metas = {}) {
    const currentFile = await this.formatFileInfo(
      {
        filename: file.name,
        type: file.type,
        size: file.size,
      },
      fileInfo,
      {
        ...metas,
        tmpWorkingDirectory: file.tmpWorkingDirectory,
      },
    );
    currentFile.getStream = () =>
      file.buffer ? Readable.from(file.buffer) : fs.createReadStream(file.path);

    const { optimize, isImage, isFaultyImage, isOptimizableImage } = strapi
      .plugin("upload")
      .service("image-manipulation");

    if (await isImage(currentFile)) {
      if (await isFaultyImage(currentFile)) {
        throw new ApplicationError("File is not a valid image");
      }
      if (await isOptimizableImage(currentFile)) {
        return optimize(currentFile);
      }
    }
    return currentFile;
  },
};
