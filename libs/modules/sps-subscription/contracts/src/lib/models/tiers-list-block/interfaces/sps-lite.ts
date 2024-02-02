import type { IModel as ITier } from "../../../../entities/tier/interfaces";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";

export interface IModel {
  id: number;
  __component: "page-blocks.tiers-list-block";
  variant: "two-columns-card";
  title: string | null;
  subtitle: string | null;
  anchor: string | null;
  description: string | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
  tiers?: ITier[] | null;
  className: string | null;
}
