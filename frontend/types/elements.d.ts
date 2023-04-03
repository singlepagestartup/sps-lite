import { IBackendMedia } from "./strapi";

export interface IBackendButton {
  id: number;
  title: string | null;
  variant: `bottom-line` | `primary` | `default`;
  url: string | null;
  description: string | null;
  media?: IBackendMedia[] | null;
  additionalMedia?: IBackendMedia[] | null;
  className: string | null;
  additionalAttributes: any | null;
}

export interface IBackendButtonsArray {
  id: number;
  title?: string;
  buttons: IBackendButton[];
  description?: string;
  className?: string;
  variant: `simple` | `dropdown`;
  media?: IBackendMedia[] | null;
  additionalMedia?: IBackendMedia[] | null;
}

export interface IBackendFaq {
  id: number;
  title: string | null;
  description: string | null;
}

export interface IBackendFeature {
  id: number;
  title: string | null;
  description: string | null;
  subtitle: string | null;
  media?: IBackendMedia[] | null;
  additionalMedia?: IBackendMedia[] | null;
}

export interface IBackendInput {
  id: number;
  placeholder: string | null;
  component: `text` | `listbox` | `radio-group` | `switch` | `file`;
  isRequired: boolean;
  value: string | null;
  name: string;
  options?: IBackendInputOption[];
  label: string | null;
  className: string | null;
  type: `text` | `textarea` | `file` | `date` | null;
  multiple: boolean | null;
}

export interface IBackendInputOption {
  id: number;
  title: string | null;
  description: string | null;
}

export interface IBackendLogotype {
  id: number;
  media?: IBackendMedia[] | null;
  additionalMedia?: IBackendMedia[] | null;
  url: string | null;
  title: string | null;
}

export interface IBackendSlide {
  id: number;
  buttons?: any[];
  title: string | null;
  subtitle: string | null;
  description: string | null;
  media?: IBackendMedia[] | null;
  additionalMedia?: IBackendMedia[] | null;
}
