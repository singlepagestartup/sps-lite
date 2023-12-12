import { IBackendComponentPageBlock } from "~redux/services/backend/components/page-blocks/interfaces";
import { IBackendApiEntity as ISpsLiteBackendApiLayout } from "../../layout/interfaces/sps-lite";
import { IBackendApiEntity as ISpsLiteBackendApiLocale } from "../../locale/interfaces/sps-lite";
import { IBackendApiEntity as ISpsLiteBackendApiMetatag } from "../../metatag/interfaces/sps-lite";

export interface IBackendApiEntity {
  id: number;
  title: string | null;
  url: string;
  locale: string;
  pageBlocks?: IBackendComponentPageBlock[] | null;
  localizations?: ISpsLiteBackendApiLocale[] | null;
  layout?: ISpsLiteBackendApiLayout | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  metatag?: ISpsLiteBackendApiMetatag | null;
  urls?: { url: string; locale: string }[] | null;
}
