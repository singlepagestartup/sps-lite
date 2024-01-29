import type { IEntity as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";

export interface IEntity {
  id: number;
  locale: string;
  title: string;
  description: string;
  script?: string | null;
  favicon?: IFile | null;
  uid: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
