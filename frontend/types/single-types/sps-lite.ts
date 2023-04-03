import { IBackendForm } from "types/collection-types";
import {
  IBackendButton,
  IBackendButtonsArray,
  IBackendLogotype,
} from "types/components/elements";
import { IBackendPageBlock } from "types/components/page-blocks";
import { IBackendMedia } from "types/plugins/upload";
import { IButtons } from "~components/buttons";

export interface ISpsLiteBackendPublicPageFooter {
  id: number;
  logotype?: IBackendLogotype | null;
  socialNetworksButtons?: IBackendButtonsArray[] | null;
  buttonsArrays?: IBackendButtonsArray[] | null;
  policiesButtons?: IBackendButtonsArray[] | null;
  copyrights: string | null;
  variant:
    | `four-columns-simple`
    | `four-columns-simple-dark`
    | `four-columns-with-company-mission`;
  description: string | null;
  form?: IBackendForm | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  _meta?: any;
}

export interface ISpsLiteBackendPublicPageNavbar {
  id: number;
  logotype?: IBackendLogotype | null;
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
  buttons?: IBackendButton[] | null;
}

export interface ISpsLiteBackendPublicPageLayout {
  id: number;
  variant: `simple`;
}

export interface ISpsLiteBackendMeta {
  title?: string | null;
  description?: string | null;
  favicon?: IBackendMedia | null;
  image?: IBackendMedia | null;
  domain?: string | null;
  gtmKey?: string | null;
  script?: string | null;
}

export interface ISpsLiteBackendMainPage {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  pageBlocks?: IBackendPageBlock[] | null;
}

export interface ISpsLiteBackendNotFoundPage {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  pageBlocks?: IBackendPageBlock[] | null;
}
