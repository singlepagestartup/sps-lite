import type { IEntity as IBackendProduct } from "../../product/interfaces";
import type { IEntity as IBackendAttributeKey } from "../../attribute-key/interfaces";
import type { IEntity as IBackendCurrency } from "@sps/sps-billing-frontend/lib/redux/entites/currency/interfaces";
import type { IEntity as IBackendFile } from "libs/modules/sps-file-storage/frontend/src/lib/redux/entities/file/interfaces";

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
  products?: IBackendProduct[] | null;
  currency?: IBackendCurrency | null;
  additionalMedia?: IBackendFile[] | null;
  date: string | null;
  datetime: string | null;
  time: string | null;
  notToClear?: boolean;
}
