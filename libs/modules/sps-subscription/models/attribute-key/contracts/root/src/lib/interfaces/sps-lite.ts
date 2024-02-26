export interface IModel {
  id: number;
  title: string | null;
  uid: string;
  locale: string;
  createdAt: string;
  updatedAt: string;
  type: "string" | "number" | "boolean" | "date" | "datetime" | "time";
  prefix: string | null;
  postfix: string | null;
  isMultiple: boolean;
  operator: "equal" | "min" | "max";
  notToClear: boolean;
  inversed: boolean;
}
