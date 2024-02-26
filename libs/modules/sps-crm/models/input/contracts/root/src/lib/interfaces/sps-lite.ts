export const variants = [
  "text",
  "listbox",
  "radio-group",
  "switch",
  "file",
  "range",
  "date",
] as const;

export interface IModel {
  id: number;
  __component: "elements.input";
  variant: (typeof variants)[number];
  placeholder: string | null;
  isRequired: boolean;
  value: string | null;
  name: string;
  label: string | null;
  className: string | null;
  type:
    | "checkbox"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "tel"
    | "text"
    | "textarea"
    | "time"
    | "select";
  multiple: boolean | null;
  min: number | null;
  max: number | null;
  step: number | null;
}
