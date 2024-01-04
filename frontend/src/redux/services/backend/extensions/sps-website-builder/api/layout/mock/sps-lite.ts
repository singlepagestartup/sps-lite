import { IEntity } from "../interfaces/sps-lite";
import { entity as sidebar } from "~redux/services/backend/extensions/sps-website-builder/api/sidebar/mock/sps-lite";
import { entity as topbar } from "~redux/services/backend/extensions/sps-website-builder/api/topbar/mock/sps-lite";
import { entity as footer } from "~redux/services/backend/extensions/sps-website-builder/api/footer/mock/sps-lite";
import { entity as navbar } from "~redux/services/backend/extensions/sps-website-builder/api/navbar/mock/sps-lite";

export const entity: IEntity = {
  id: 3,
  locale: "en",
  createdAt: "2023-03-28T11:07:56.252Z",
  updatedAt: "2023-03-28T11:07:57.474Z",
  publishedAt: "2023-03-28T11:07:57.457Z",
  title: "Public Page Layout",
  uid: "public-page-layout",
  variant: "wide",
  sidebar: sidebar,
  topbar: topbar,
  footer: footer,
  navbar: navbar,
  className: null,
};
