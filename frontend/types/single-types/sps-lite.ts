import { ISpsLiteBackendForm } from "types/collection-types/sps-lite";
import {
  ISpsLiteBackendButton,
  ISpsLiteBackendButtonsArray,
  ISpsLiteBackendLogotype,
} from "types/components/elements/sps-lite";
import { ISpsLiteBackendPageBlock } from "types/components/page-blocks/sps-lite";
import { ISpsLiteBackendUploadPluginBackendMedia } from "types/plugins/upload/sps-lite";

export interface ISpsLiteBackendPublicPageFooter {
  id: number;
  logotype?: ISpsLiteBackendLogotype | null;
  socialNetworksButtons?: ISpsLiteBackendButtonsArray[] | null;
  buttonsArrays?: ISpsLiteBackendButtonsArray[] | null;
  policiesButtons?: ISpsLiteBackendButtonsArray[] | null;
  copyrights: string | null;
  variant: `four-columns-with-company-mission`;
  description: string | null;
  form?: ISpsLiteBackendForm | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  _meta?: any;
}

export interface ISpsLiteBackendPublicPageNavbar {
  id: number;
  logotype?: ISpsLiteBackendLogotype | null;
  buttons?: ISpsLiteBackendButton[];
  locale: string;
  additionalButtons?: ISpsLiteBackendButton[];
  ctaButtons?: ISpsLiteBackendButton[];
  className: string | null;
  variant: `simple-links-on-left`;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  _meta?: any;
}

export interface ISpsLiteBackendPublicPageTopbar {
  id: number;
  title: string | null;
  locale: string;
  variant: `simple`;
  buttons?: ISpsLiteBackendButton[] | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  _meta?: any;
}

export interface ISpsLiteBackendPublicPageLayout {
  id: number;
  variant: `simple`;
  locale: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  _meta?: any;
}

export interface ISpsLiteBackendMeta {
  id: number;
  title?: string | null;
  description?: string | null;
  favicon?: ISpsLiteBackendUploadPluginBackendMedia | null;
  image?: ISpsLiteBackendUploadPluginBackendMedia | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  domain?: string | null;
  gtmKey?: string | null;
  script?: string | null;
  _meta?: any;
}

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
