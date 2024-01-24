const allowedImageExtensions = ["png", "jpeg", "webp", "tiff"];

export default function parseMimeType(mime: string) {
  if (!mime) return {};
  const splittedMime = mime?.split("/");

  const type = splittedMime[0];
  const ext = splittedMime[1]; //?
  let renderType = type; //?

  if (type === "image" && !allowedImageExtensions.includes(ext)) {
    renderType = "file";
  }

  if (type !== "image" && type !== "video") {
    renderType = "file";
  }

  return { type, ext, renderType };
}
