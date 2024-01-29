import type { IEntity as IFile } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/interfaces";

export interface IEntity {
  id: number;
  name: string | null;
  title: string | null;
  subtitle: string | null;
  rating: number | null;
  description: string | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
