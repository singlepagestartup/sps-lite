import type { IEntity as IFile } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/interfaces";

export interface IComponent {
  id: number;
  __component: "elements.feature";
  title: string | null;
  description: string | null;
  subtitle: string | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
