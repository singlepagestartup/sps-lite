import { IBackendMedia } from "types/plugins/upload";
import { IBackendButton, IBackendInputOption } from ".";

export interface ISpsLiteBackendButton {
  id: number;
  __component: `elements.button`;
  variant: `bottom-line` | `primary` | `default`;
  title: string | null;
  url: string | null;
  description: string | null;
  media?: IBackendMedia[] | null;
  additionalMedia?: IBackendMedia[] | null;
  className: string | null;
  additionalAttributes: any | null;
}

export interface ISpsLiteBackendButtonsArray {
  id: number;
  __component: `elements.buttons-array`;
  variant: `simple` | `dropdown`;
  title: string | null;
  buttons: IBackendButton[];
  description: string | null;
  className: string | null;
  media?: IBackendMedia[] | null;
  additionalMedia?: IBackendMedia[] | null;
}

export interface ISpsLiteBackendFaq {
  id: number;
  __component: `elements.faq`;
  title: string | null;
  description: string | null;
}

export interface ISpsLiteBackendFeature {
  id: number;
  __component: `elements.feature`;
  title: string | null;
  description: string | null;
  subtitle: string | null;
  media?: IBackendMedia[] | null;
  additionalMedia?: IBackendMedia[] | null;
}

export interface ISpsLiteBackendInputOption {
  id: number;
  __component: `elements.input-option`;
  title: string | null;
  description: string | null;
}

export interface ISpsLiteBackendInput {
  id: number;
  __component: `elements.input`;
  component: `text` | `listbox` | `radio-group` | `switch` | `file`;
  placeholder: string | null;
  isRequired: boolean;
  value: string | null;
  name: string;
  options?: IBackendInputOption[];
  label: string | null;
  className: string | null;
  type: `text` | `textarea` | `file` | `date` | null;
  multiple: boolean | null;
}

export interface ISpsLiteBackendLogotype {
  id: number;
  __component: `elements.logotype`;
  media?: IBackendMedia[] | null;
  additionalMedia?: IBackendMedia[] | null;
  url: string | null;
  title: string | null;
}

export interface ISpsLiteBackendSlide {
  id: number;
  __component: `elements.slide`;
  buttons?: any[];
  title: string | null;
  subtitle: string | null;
  description: string | null;
  media?: IBackendMedia[] | null;
  additionalMedia?: IBackendMedia[] | null;
}
