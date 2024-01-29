import type { IEntity as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";

export interface IComponent {
  id: number;
  __component: "elements.input-option";
  title: string | null;
  description: string | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
  extraMedia?: IFile[] | null;
}
