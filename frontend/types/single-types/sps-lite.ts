import { ISpsLiteBackendPageBlock } from "types/components/page-blocks/sps-lite";

export interface ISpsLiteBackendMainPage {
  id: number;
  locale: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
  _meta?: any;
}

export interface ISpsLiteBackendNotFoundPage {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
  _meta?: any;
}
