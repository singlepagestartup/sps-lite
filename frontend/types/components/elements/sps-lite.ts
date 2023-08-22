import { ISpsLiteBackendFlyout } from "types/collection-types/sps-lite";
import { ISpsLiteBackendUploadPluginBackendMedia } from "types/plugins/upload/sps-lite";

export interface ISpsLiteBackendButton {
  id: number;
  __component?: "elements.button";
  variant: "text" | "primary" | "secondary";
  title: string | null;
  url: string | null;
  description: string | null;
  media?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
  additionalMedia?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
  className: string | null;
  additionalAttributes: any | null;
  flyout: ISpsLiteBackendFlyout | null;
}

export interface ISpsLiteBackendButtonsArray {
  id: number;
  __component: "elements.buttons-array";
  variant: "column-with-title" | "row";
  title: string | null;
  additionalAttributes: any;
  buttons: ISpsLiteBackendButton[];
  description: string | null;
  className: string | null;
  url: string | null;
  media?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
  additionalMedia?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
}

export interface ISpsLiteBackendFaq {
  id: number;
  __component: "elements.faq";
  title: string | null;
  description: string | null;
}

export interface ISpsLiteBackendFeature {
  id: number;
  __component: "elements.feature";
  title: string | null;
  description: string | null;
  subtitle: string | null;
  media?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
  additionalMedia?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
}

export interface ISpsLiteBackendInputOption {
  id: number;
  __component: "elements.input-option";
  title: string | null;
  description: string | null;
  media?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
  additionalMedia?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
  extraMedia?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
}

export interface ISpsLiteBackendInput {
  id: number;
  __component: "elements.input";
  variant:
    | "text"
    | "listbox"
    | "radio-group"
    | "switch"
    | "file"
    | "range"
    | "date";
  placeholder: string | null;
  isRequired: boolean;
  value: string | null;
  name: string;
  options?: Omit<ISpsLiteBackendInputOption, "__component">[];
  label: string | null;
  className: string | null;
  type:
    | "text"
    | "textarea"
    | "file"
    | "date"
    | "datetime"
    | "date_inline"
    | null;
  multiple: boolean | null;
  min: number | null;
  max: number | null;
  step: number | null;
  media?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
  extraMedia?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
  additionalMedia?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
}

export interface ISpsLiteBackendLogotype {
  id: number;
  __component: "elements.logotype";
  media?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
  additionalMedia?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
  url: string | null;
  title: string | null;
}

export interface ISpsLiteBackendSlide {
  id: number;
  __component: "elements.slide";
  buttons?: any[];
  title: string | null;
  subtitle: string | null;
  description: string | null;
  media?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
  additionalMedia?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
}

export interface ISpsLiteBackendFont {
  id: number;
  __component: "elements.font";
  media?: ISpsLiteBackendUploadPluginBackendMedia;
  weight: "light" | "regular" | "medium" | "semi_bold" | "bold";
  style: "normal" | "italic";
  variant: "primary" | "default";
}
