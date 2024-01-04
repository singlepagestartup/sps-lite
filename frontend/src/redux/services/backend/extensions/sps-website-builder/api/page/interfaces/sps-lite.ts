import { IBackendComponentPageBlock } from "~redux/services/backend/components/page-blocks/interfaces";
import { IEntity as IBackendLayout } from "../../layout/interfaces";
import { IEntity as IBackendLocale } from "../../../../../api/locale/interfaces";
import { IEntity as IBackendMetatag } from "../../metatag/interfaces";

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
