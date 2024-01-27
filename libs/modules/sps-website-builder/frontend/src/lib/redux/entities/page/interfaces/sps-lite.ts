import { IBackendComponentPageBlock } from "../../../components/page-blocks/interfaces/index";
import type { IEntity as IBackendLayout } from "../../layout/interfaces";
import type { IEntity as IBackendLocale } from "@sps/sps-website-builder-frontend/lib/redux/entities/locale/interfaces";
import type { IEntity as IBackendMetatag } from "../../metatag/interfaces";

export interface IEntity {
  id: number;
  title: string | null;
  url: string;
  locale: string;
  pageBlocks?: IBackendComponentPageBlock[] | null;
  localizations?: IBackendLocale[] | null;
  layout?: IBackendLayout | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  metatag?: IBackendMetatag | null;
  urls?: { url: string; locale: string }[] | null;
}
