import type { IEntity as IProduct } from "../../product/interfaces";
import type { IEntity as IAttributeKey } from "../../attribute-key/interfaces";

export interface IEntity {
  id: number;
  attributeKey?: IAttributeKey | null;
  string: string | null;
  number: number | null;
  boolean: boolean | null;
  createdAt: string;
  updatedAt: string;
  locale: string;
  products?: IProduct[] | null;
  date: string | null;
  datetime: string | null;
  time: string | null;
  notToClear?: boolean;
}
