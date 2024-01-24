import { IBackendComponentPageBlock } from "~redux/services/backend/components/page-blocks/interfaces";
import type { IEntity as IBackendLayout } from "../../layout/interfaces";
import type { IEntity as IBackendLocale } from "@sps/api-frontend/lib/redux/entities/locale/interfaces";
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
