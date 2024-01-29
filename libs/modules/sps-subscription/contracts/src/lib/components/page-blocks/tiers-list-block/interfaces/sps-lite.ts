import type { IEntity as ITier } from "../../../../entities/tier/interfaces";
import type { IEntity as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";

export interface IComponent {
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
