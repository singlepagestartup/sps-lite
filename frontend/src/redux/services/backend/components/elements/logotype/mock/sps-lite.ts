import { entity as file } from "~redux/services/backend/extensions/upload/api/file/mock/sps-lite";
import { IBackendComponentElement } from "../interfaces/sps-lite";

export const entity: IBackendComponentElement = {
  id: 5,
  __component: "elements.logotype",
  media: [{ ...file }],
  additionalMedia: null,
  title: "",
  url: "https://singlepagestartup.com",
};
