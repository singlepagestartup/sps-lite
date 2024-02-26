import axios from "axios";
import { getFileUrl } from "./get-file-url";
// import type { IModel as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";

type IBackendFile = any;

export async function downloadBackendUploadFile(
  fileInfo: IBackendFile,
): Promise<File> {
  const fileUrl = getFileUrl(fileInfo);

  const file = await axios({
    url: fileUrl,
    method: "GET",
    responseType: "blob",
  }).then((response) => {
    return new File([response.data], `${(Math.random() * 1e10).toFixed(0)}`, {
      type: fileInfo.mime,
    });
  });

  return file;
}
