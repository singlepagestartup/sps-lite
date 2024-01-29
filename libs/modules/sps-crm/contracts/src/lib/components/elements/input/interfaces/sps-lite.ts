import type { IEntity as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";
import type { IComponent as IInputOption } from "../../input-option/interfaces";

export interface IComponent {
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
  options?: Omit<IInputOption, "__component">[];
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
  media?: IFile[] | null;
  extraMedia?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
