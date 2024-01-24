import { IEntity as IBackendFile } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/interfaces";
import { IEntity as IBackendAttribute } from "../../attribute/interfaces";

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
