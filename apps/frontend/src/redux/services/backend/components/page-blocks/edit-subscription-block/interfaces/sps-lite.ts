import { IEntity as IBackendFile } from "libs/modules/sps-file-storage/frontend/src/lib/redux/entities/file/interfaces";

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
