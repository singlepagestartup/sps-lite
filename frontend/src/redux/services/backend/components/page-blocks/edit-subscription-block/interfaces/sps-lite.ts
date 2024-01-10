import { IEntity as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.edit-subscription-block";
  variant: "simple";
  title: string | null;
  subtitle: string | null;
  anchor: string | null;
  description: string | null;
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
  className: string | null;
}
