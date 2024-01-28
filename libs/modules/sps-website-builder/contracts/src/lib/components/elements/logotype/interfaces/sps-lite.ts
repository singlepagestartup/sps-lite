import type { IEntity as IFile } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/interfaces";

export interface IComponent {
  id: number;
  __component: "elements.logotype";
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
  url: string | null;
  title: string | null;
}
