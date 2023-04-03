import { IBackendMedia } from "types/plugins/upload";
import { IBackendButton, IBackendInputOption } from ".";

export interface ISpsLiteBackendButton {
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

export interface ISpsLiteBackendButtonsArray {
  id: number;
  title?: string;
  buttons: IBackendButton[];
  description?: string;
  className?: string;
  variant: `simple` | `dropdown`;
  media?: IBackendMedia[] | null;
  additionalMedia?: IBackendMedia[] | null;
}

export interface ISpsLiteBackendFaq {
  id: number;
  title: string | null;
  description: string | null;
}

export interface ISpsLiteBackendFeature {
  id: number;
  title: string | null;
  description: string | null;
  subtitle: string | null;
  media?: IBackendMedia[] | null;
  additionalMedia?: IBackendMedia[] | null;
}

export interface ISpsLiteBackendInput {
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

export interface ISpsLiteBackendInputOption {
  id: number;
  title: string | null;
  description: string | null;
}

export interface ISpsLiteBackendLogotype {
  id: number;
  media?: IBackendMedia[] | null;
  additionalMedia?: IBackendMedia[] | null;
  url: string | null;
  title: string | null;
}

export interface ISpsLiteBackendSlide {
  id: number;
  buttons?: any[];
  title: string | null;
  subtitle: string | null;
  description: string | null;
  media?: IBackendMedia[] | null;
  additionalMedia?: IBackendMedia[] | null;
}
