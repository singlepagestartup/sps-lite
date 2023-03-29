import { IMedia } from "types";
import { IButton } from "~components/buttons/simple-buttons";

export interface IBackendFeature {
  id: number;
  title: string | null;
  description: string | null;
  subtitle: string | null;
  media?: IMedia[] | null;
  icon?: IMedia | null;
}

export interface IBackendOption {
  id: number;
  title: string | null;
  description: string | null;
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

export interface IBackendLogo {
  logo: IMedia | null;
  logoMonochrome: IMedia | null;
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
  media: IMedia;
}
