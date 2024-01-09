import { IEntity as IBackendOrder } from "~redux/services/backend/extensions/sps-ecommerce/api/order/interfaces";
import { IEntity as IBackendProduct } from "~redux/services/backend/extensions/sps-ecommerce/api/product/interfaces";
import { IEntity as IBackendAttribute } from "~redux/services/backend/extensions/sps-ecommerce/api/attribute/interfaces";

export interface IEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  order?: IBackendOrder | null;
  product?: IBackendProduct | null;
  attributes?: IBackendAttribute[] | null;
}
