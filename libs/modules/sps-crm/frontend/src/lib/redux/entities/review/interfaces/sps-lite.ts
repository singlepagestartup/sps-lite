import type { IEntity as IBackendFile } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/interfaces";

export interface IEntity {
  id: number;
  name: string | null;
  title: string | null;
  subtitle: string | null;
  rating: number | null;
  description: string | null;
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
