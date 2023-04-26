import { IBackendUploadPluginBackendMedia } from "types/plugins/upload";
import { BACKEND_URL } from "~utils/envs";

export default function getFileUrl(
  obj: IBackendUploadPluginBackendMedia,
  options: {
    size?: string;
  } = {}
) {
  const { size } = options;
  if (!obj) {
    return null;
  }

  const url = size ? obj.formats?.[size]?.url || obj.url : obj.url;

  const httpsExists = url.match(/^https?:\/\//);

  if (httpsExists) {
    return url;
  }

  return `${BACKEND_URL || ""}${url}`;
}
