import type { IEntity as IFile } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/interfaces";

export interface IEntity {
  id: number;
  locale: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  className: string | null;
  anchor: string | null;
  variant: "simple";
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
