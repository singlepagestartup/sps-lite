import type { IEntity as IBackendFile } from "libs/modules/sps-file-storage/frontend/src/lib/redux/entities/file/interfaces";

export interface IComponent {
  id: number;
  __component: "elements.logotype";
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
  url: string | null;
  title: string | null;
}
