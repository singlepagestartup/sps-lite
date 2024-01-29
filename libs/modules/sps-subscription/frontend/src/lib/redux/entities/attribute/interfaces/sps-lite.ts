import type { IEntity as IBackendTier } from "../../tier/interfaces";
import type { IEntity as IBackendAttributeKey } from "../../attribute-key/interfaces";
import type { IEntity as IBackendCurrency } from "libs/modules/sps-billing/contracts/src/lib/entities/currency/interfaces";
import type { IEntity as IBackendFile } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/interfaces";

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
