import { IEntity as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";

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
