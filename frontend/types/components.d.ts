import { IButton } from "~components/buttons/simple-buttons";
import { IBackendMedia } from "./models";

export interface IBackendFeature {
  id: number;
  title: string | null;
  description: string | null;
  subtitle: string | null;
  media?: IBackendMedia[] | null;
  additionalMedia?: IBackendMedia[] | null;
}

export interface IBackendOption {
  id: number;
  title: string | null;
  description: string | null;
}

export interface IBackendButton {
  title: string;
  variant: `bottom-line` | `primary` | `default`;
  url?: string;
  description?: string;
  media?: IBackendMedia[] | null;
  additionalMedia?: IBackendMedia[] | null;
  className?: string;
  additionalAttributes?: any;
}

export interface IBackendButtonsArray {
  title?: string;
  buttons: IBackendButton[];
  description?: string;
  className?: string;
  variant: `simple` | `dropdown`;
  media?: IBackendMedia[] | null;
  additionalMedia?: IBackendMedia[] | null;
}

export interface IBackendInput {
  placeholder: string | null;
  component: `text` | `listbox` | `radio-group` | `switch` | `file`;
  isRequired: boolean;
  value: string | null;
  name: string;
  options?: IBackendOption[];
  label: string | null;
  className: string | null;
  type: `text` | `textarea` | `file` | `date` | null;
  multiple: boolean | null;
}

export interface IBackendLogotype {
  media: IBackendMedia[] | null;
  additionalMedia: IBackendMedia[] | null;
  url: string;
  title: string | null;
}

export interface IBackendFaq {
  title: string;
  description: string;
}

export interface IBackendSlide {
  id: number;
  buttons?: IButton[];
  title?: string;
  subtitle?: string;
  description?: string;
  media: IBackendMedia[];
  additionalMedia: IBackendMedia[] | null;
}
