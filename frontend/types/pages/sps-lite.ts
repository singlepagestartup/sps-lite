import { ISpsLiteBackendLayout } from "types/collection-types/sps-lite";
import { ISpsLiteBackendPageBlock } from "types/components/page-blocks/sps-lite";

export interface ISpsLitePublicPage {
  id: number;
  locale: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  layout?: ISpsLiteBackendLayout | null;
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
}

export type ISpsLiteMainPage = ISpsLitePublicPage;

export type ISpsLiteNotFoundPage = ISpsLitePublicPage;
