import { IEntity as IBackendTier } from "../../tier/interfaces";
import { IEntity as IBackendAttributeKey } from "../../attribute-key/interfaces";
import { IEntity as IBackendCurrency } from "@sps/sps-billing-frontend/lib/redux/entites/currency/interfaces";
import { IEntity as IBackendFile } from "libs/modules/sps-file-storage/frontend/src/lib/redux/entities/file/interfaces";

export interface IEntity {
  id: number;
  attributeKey?: IBackendAttributeKey | null;
  string: string | null;
  number: number | null;
  boolean: boolean | null;
  createdAt: string;
  updatedAt: string;
  locale: string;
  media?: IBackendFile[] | null;
  currency?: IBackendCurrency | null;
  additionalMedia?: IBackendFile[] | null;
  date: string | null;
  datetime: string | null;
  time: string | null;
  notToClear?: boolean;
  tiers?: IBackendTier[] | null;
}
