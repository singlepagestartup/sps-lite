import { ISpsLiteBackendLogotype } from "../interfaces/sps-lite";
import { entity as file } from "~redux/services/backend/models/upload/mock/sps-lite";

export const entity: ISpsLiteBackendLogotype = {
  id: 5,
  __component: "elements.logotype",
  media: [{ ...file }],
  additionalMedia: null,
  title: "",
  url: "https://singlepagestartup.com",
};
