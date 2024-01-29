import type { IEntity as ITier } from "../../tier/interfaces";
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
  date: string | null;
  datetime: string | null;
  time: string | null;
  notToClear?: boolean;
  tiers?: ITier[] | null;
}
