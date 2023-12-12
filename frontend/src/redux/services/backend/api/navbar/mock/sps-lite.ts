import { IEntity } from "../interfaces/sps-lite";
import { entity as pageBlock } from "~redux/services/backend/components/page-blocks/navbar-block/mock/sps-lite";

export const entity: IEntity = {
  id: 1,
  title: "Public Page Navbar",
  uid: "public-page-navbar",
  locale: "en",
  variant: "boxed",
  position: "fixed",
  side: "top",
  className: null,
  createdAt: "2023-03-28T11:07:56.252Z",
  updatedAt: "2023-03-28T11:07:57.474Z",
  publishedAt: "2023-03-28T11:07:57.457Z",
  pageBlocks: [{ ...pageBlock }],
};
