import type { IEntity as IBackendFile } from "libs/modules/sps-file-storage/frontend/src/lib/redux/entities/file/interfaces";

export interface IComponent {
  id: number;
  __component: "elements.feature";
  title: string | null;
  description: string | null;
  subtitle: string | null;
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
}
