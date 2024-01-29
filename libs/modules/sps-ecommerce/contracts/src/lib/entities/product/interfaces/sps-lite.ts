import type { IEntity as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";
import type { IEntity as IBackendAttribute } from "../../attribute/interfaces";

export interface IEntity {
  id: number;
  title: string | null;
  description: string | null;
  fullDescription: string | null;
  media?: IFile[] | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  attributes?: IBackendAttribute[] | null;
}
