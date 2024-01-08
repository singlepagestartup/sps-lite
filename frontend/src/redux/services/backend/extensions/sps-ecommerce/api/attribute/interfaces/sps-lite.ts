import { IEntity as IBackendProduct } from "../../product/interfaces";
import { IEntity as IBackendAttributeKey } from "../../attribute-key/interfaces";
import { IEntity as IBackendCurrency } from "~redux/services/backend/extensions/sps-billing/api/currency/interfaces";
import { IEntity as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";

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
