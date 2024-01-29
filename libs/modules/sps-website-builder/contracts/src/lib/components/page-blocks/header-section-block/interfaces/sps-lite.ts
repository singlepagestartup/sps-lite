import type { IEntity as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.header-section-block";
  variant: "simple-centered";
  title: string | null;
  description: string | null;
  subtitle: string | null;
  className: string | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
  anchor: string | null;
}
