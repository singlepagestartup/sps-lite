import type { IEntity as ITier } from "../../tier/interfaces";
import type { IEntity as IAttributeKey } from "../../attribute-key/interfaces";
import type { IEntity as ICurrency } from "@sps/sps-billing-contracts/lib/entities/currency/interfaces";
import type { IEntity as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";

export interface IEntity {
  id: number;
  attributeKey?: IAttributeKey | null;
  string: string | null;
  number: number | null;
  boolean: boolean | null;
  createdAt: string;
  updatedAt: string;
  locale: string;
  media?: IFile[] | null;
  currency?: ICurrency | null;
  additionalMedia?: IFile[] | null;
  date: string | null;
  datetime: string | null;
  time: string | null;
  notToClear?: boolean;
  tiers?: ITier[] | null;
}
