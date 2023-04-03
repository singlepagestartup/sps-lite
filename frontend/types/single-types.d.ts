import { IButtons } from "~components/buttons";
import {
  IBackendButton,
  IBackendButtonsArray,
  IBackendLogotype,
} from "./elements";

export interface IBackendPublicPageFooter {
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

export interface IBackendPublicPageNavbar {
  id: number;
  logotype?: IBackendLogotype | null;
  buttons?: IButtons[];
  profileButtons?: IButtons[];
  additionalButtons?: IButtons[];
  ctaButtons?: IButtons[];
  className: string | null;
  variant: `simple-links-on-left`;
}

export interface IBackendPublicPageTopbar {
  title: string | null;
  variant: `simple`;
  buttons?: IBackendButton[] | null;
}

export interface IBackendPublicPageLayout {
  id: number;
  variant: `simple`;
}

export interface IBackendMeta {
  title?: string | null;
  description?: string | null;
  favicon?: IBackendMedia | null;
  image?: IBackendMedia | null;
  domain?: string | null;
  gtmKey?: string | null;
  script?: string | null;
}
