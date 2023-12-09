import { IBackendUploadFile } from "~redux/services/backend/models/upload/interfaces";
import { BACKEND_URL } from "~utils/envs";

export default function getFileUrl(
  obj: IBackendUploadFile,
  options: {
    size?: string;
  } = {},
) {
  const { size } = options;
  if (!obj) {
    throw new Error("No file object provided");
  }

  const url = size ? obj.formats?.[size]?.url || obj.url : obj.url;

  if (!url) {
    throw new Error("No file url provided");
  }

  const httpsExists = url.match(/^https?:\/\//);

  if (httpsExists) {
    return url;
  }

  return `${BACKEND_URL || ""}${url}`;
}
