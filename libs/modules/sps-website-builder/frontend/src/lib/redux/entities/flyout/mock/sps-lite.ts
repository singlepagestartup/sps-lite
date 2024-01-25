import type { IEntity } from "../interfaces/sps-lite";
import { entity as pageBlock } from "../../../components/page-blocks/hero-section-block/mock/sps-lite";

export const entity: IEntity = {
  id: 1,
  title: "Main Menu",
  uid: "main-menu",
  locale: "en",
  variant: "simple",
  className: null,
  createdAt: "2023-03-28T11:07:56.252Z",
  updatedAt: "2023-03-28T11:07:57.474Z",
  publishedAt: "2023-03-28T11:07:57.457Z",
  pageBlocks: [{ ...pageBlock }],
};
