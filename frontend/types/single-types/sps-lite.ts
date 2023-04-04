import { ISpsLiteBackendForm } from "types/collection-types/sps-lite";
import {
  ISpsLiteBackendButton,
  ISpsLiteBackendButtonsArray,
  ISpsLiteBackendLogotype,
} from "types/components/elements/sps-lite";
import { ISpsLiteBackendPageBlock } from "types/components/page-blocks/sps-lite";
import { ISpsLiteBackendUploadPluginBackendMedia } from "types/plugins/upload/sps-lite";
import { IButtons } from "~components/buttons";

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
  buttons?: IButtons[];
  profileButtons?: IButtons[];
  additionalButtons?: IButtons[];
  ctaButtons?: IButtons[];
  className: string | null;
  variant: `simple-links-on-left`;
}

export interface ISpsLiteBackendPublicPageTopbar {
  title: string | null;
  variant: `simple`;
  buttons?: ISpsLiteBackendButton[] | null;
}

export interface ISpsLiteBackendPublicPageLayout {
  id: number;
  variant: `simple`;
}

export interface ISpsLiteBackendMeta {
  title?: string | null;
  description?: string | null;
  favicon?: ISpsLiteBackendUploadPluginBackendMedia | null;
  image?: ISpsLiteBackendUploadPluginBackendMedia | null;
  domain?: string | null;
  gtmKey?: string | null;
  script?: string | null;
}

export interface ISpsLiteBackendMainPage {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
}

export interface ISpsLiteBackendNotFoundPage {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
}
