import parseMimeType from "./parse-mime-type";

describe("parseMimeType", () => {
  it("should return 'image' render type", () => {
    const mimeTypes = ["image/png", "image/jpeg", "image/webp", "image/tiff"];

    mimeTypes.forEach((mime) => {
      const parsed = parseMimeType(mime);
      expect(parsed.type).toBe("image");
      expect(parsed.renderType).toBe("image");
    });
  });

  it("should return 'file' render type for files", () => {
    const mimeTypes = ["application/pdf", "audio/mpeg"];

    mimeTypes.forEach((mime) => {
      const parsed = parseMimeType(mime);
      expect(parsed.renderType).toBe("file");
    });
  });

  it("should return 'video' render type for videos", () => {
    const mimeTypes = ["video/mp4", "video/webm", "video/ogg"];

    mimeTypes.forEach((mime) => {
      const parsed = parseMimeType(mime);
      expect(parsed.renderType).toBe("video");
    });
  });
});
