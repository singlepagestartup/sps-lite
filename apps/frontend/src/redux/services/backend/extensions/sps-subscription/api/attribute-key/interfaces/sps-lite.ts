import { IEntity as IBackendAttribute } from "../../attribute/interfaces";

export interface IEntity {
  id: number;
  title: string | null;
  key: string;
  locale: string;
  createdAt: string;
  updatedAt: string;
  attributes?: IBackendAttribute[] | null;
  type: "string" | "number" | "boolean" | "date" | "datetime" | "time";
  prefix: string | null;
  postfix: string | null;
  isMultiple: boolean;
  operator: "equal" | "min" | "max";
  notToClear: boolean;
  inversed: boolean;
}
