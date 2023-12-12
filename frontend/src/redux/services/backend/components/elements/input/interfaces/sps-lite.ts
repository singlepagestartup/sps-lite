import { IBackendExtensionUploadApiEntity as IBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";
import { IBackendComponentElement as IBackendComponentInputOption } from "../../input-option/interfaces";

export interface IBackendComponentElement {
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
  options?: Omit<IBackendComponentInputOption, "__component">[];
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
  media?: IBackendExtensionUploadApiFile[] | null;
  extraMedia?: IBackendExtensionUploadApiFile[] | null;
  additionalMedia?: IBackendExtensionUploadApiFile[] | null;
}
