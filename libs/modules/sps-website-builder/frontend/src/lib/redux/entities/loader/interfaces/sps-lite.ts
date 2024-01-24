import { IEntity as IBackendFile } from "libs/modules/sps-file-storage/frontend/src/lib/redux/entities/file/interfaces";

export interface IEntity {
  id: number;
  locale: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  className: string | null;
  anchor: string | null;
  variant: "simple";
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
}
