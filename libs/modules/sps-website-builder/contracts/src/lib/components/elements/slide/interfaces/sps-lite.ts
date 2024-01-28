import type { IEntity as IFile } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/interfaces";

export interface IComponent {
  id: number;
  __component: "elements.slide";
  buttons?: any[];
  title: string | null;
  subtitle: string | null;
  description: string | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
