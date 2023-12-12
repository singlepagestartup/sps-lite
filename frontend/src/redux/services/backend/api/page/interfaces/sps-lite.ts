import { IBackendComponentPageBlock } from "~redux/services/backend/components/page-blocks/interfaces";
import { IBackendApiEntity as IBackendApiLayout } from "../../layout/interfaces";
import { IBackendApiEntity as IBackendApiLocale } from "../../locale/interfaces";
import { IBackendApiEntity as IBackendApiMetatag } from "../../metatag/interfaces";

export interface IBackendApiEntity {
  id: number;
  title: string | null;
  url: string;
  locale: string;
  pageBlocks?: IBackendComponentPageBlock[] | null;
  localizations?: IBackendApiLocale[] | null;
  layout?: IBackendApiLayout | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  metatag?: IBackendApiMetatag | null;
  urls?: { url: string; locale: string }[] | null;
}
