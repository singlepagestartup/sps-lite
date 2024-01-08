import { IEntity as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";
import { IEntity as IBackendAttribute } from "~redux/services/backend/extensions/sps-ecommerce/api/attribute/interfaces";

export interface IEntity {
  id: number;
  title: string | null;
  description: string | null;
  fullDescription: string | null;
  media?: IBackendFile[] | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  attributes?: IBackendAttribute[] | null;
}
