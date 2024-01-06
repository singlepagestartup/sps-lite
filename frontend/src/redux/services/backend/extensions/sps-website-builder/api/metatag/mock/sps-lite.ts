import { IEntity } from "../interfaces/sps-lite";
import { entity as file } from "~redux/services/backend/extensions/upload/api/file/mock/sps-lite";

export const entity: IEntity = {
  id: 1,
  title: "Single Page Startup",
  uid: "single-page-startup",
  locale: "en",
  createdAt: "2023-03-28T11:07:56.252Z",
  updatedAt: "2023-03-28T11:07:57.474Z",
  publishedAt: "2023-03-28T11:07:57.457Z",
  description: "Boilerplate for lean startup developers",
  script: null,
  favicon: file,
};
