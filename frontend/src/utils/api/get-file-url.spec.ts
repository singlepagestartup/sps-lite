import { IEntity as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";
import getFileUrl from "./get-file-url";
import { BACKEND_URL } from "~utils/envs";

describe("getFileUrl", () => {
  it("should return the file URL with the correct backend URL", () => {
    const obj: IBackendFile = {
      id: 123,
      name: "example.jpg",
      url: "/uploads/2021/08/12/example.jpg",
      alternativeText: null,
      caption: null,
      width: 500,
      height: 500,
      hash: "hash",
      ext: ".jpg",
      mime: "image/jpeg",
      size: 10.24,
      previewUrl: null,
      provider: "local",
    };

    const expectedUrl = `${BACKEND_URL}/uploads/2021/08/12/example.jpg`;

    const result = getFileUrl(obj);

    expect(result).toBe(expectedUrl);
  });

  it("should return the file URL with the correct S3 URL", () => {
    const obj: IBackendFile = {
      id: 123,
      name: "example.jpg",
      url: "https://project.s3.amazonaws.com/bucket/2021/08/12/example.jpg",
      alternativeText: null,
      caption: null,
      width: 500,
      height: 500,
      hash: "hash",
      ext: ".jpg",
      mime: "image/jpeg",
      size: 10.24,
      previewUrl: null,
      provider: "local",
    };

    const options = {
      size: "thumbnail",
    };

    const expectedUrl =
      "https://project.s3.amazonaws.com/bucket/2021/08/12/example.jpg";

    const result = getFileUrl(obj, options);

    expect(result).toBe(expectedUrl);
  });

  it("should throw an error if no file object is provided", () => {
    expect(() => getFileUrl(null as any)).toThrow("No file object provided");
  });

  it("should throw an error if no url in object", () => {
    const obj: any = {
      id: 123,
      name: "example.jpg",
      url: null,
      alternativeText: null,
      caption: null,
      width: 500,
      height: 500,
      hash: "hash",
      ext: ".jpg",
      mime: "image/jpeg",
      size: 10.24,
      previewUrl: null,
      provider: "local",
    };

    expect(() => getFileUrl(obj)).toThrow("No file url provided");
  });
});
