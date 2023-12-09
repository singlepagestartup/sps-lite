import { ISpsLiteBackendPageBlock } from "types/components/page-blocks/sps-lite";
import { ISpsLiteBackendLayout } from "../../layout/interfaces/sps-lite";
import { ISpsLiteBackendMetatag } from "../../metatag/interfaces/sps-lite";

export interface ISpsLiteBackendPage {
  id: number;
  title: string | null;
  url: string;
  locale: string;
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
  localizations?: ISpsLiteBackendPage[] | null;
  layout?: ISpsLiteBackendLayout | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  metatag?: ISpsLiteBackendMetatag | null;
  urls?: { url: string; locale: string }[] | null;
}
