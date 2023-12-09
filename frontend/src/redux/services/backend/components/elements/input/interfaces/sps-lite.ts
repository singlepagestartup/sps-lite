import { ISpsLiteBackendUploadFile } from "~redux/services/backend/models/upload/interfaces/sps-lite";
import { ISpsLiteBackendInputOption } from "../../input-option/interfaces/sps-lite";

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
    | "number"
    | "text"
    | "textarea"
    | "file"
    | "date"
    | "datetime"
    | "date_inline"
    | "daterange_inline"
    | "datetimerange_inline"
    | null;
  multiple: boolean | null;
  min: number | null;
  max: number | null;
  step: number | null;
  media?: ISpsLiteBackendUploadFile[] | null;
  extraMedia?: ISpsLiteBackendUploadFile[] | null;
  additionalMedia?: ISpsLiteBackendUploadFile[] | null;
}
