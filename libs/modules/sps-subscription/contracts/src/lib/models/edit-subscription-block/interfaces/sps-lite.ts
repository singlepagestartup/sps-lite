import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";

export interface IModel {
  id: number;
  __component: "page-blocks.edit-subscription-block";
  variant: "simple";
  title: string | null;
  subtitle: string | null;
  anchor: string | null;
  description: string | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
  className: string | null;
}
