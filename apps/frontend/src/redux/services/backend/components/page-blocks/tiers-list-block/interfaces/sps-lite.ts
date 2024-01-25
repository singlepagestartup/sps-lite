import type { IEntity as IBackendTier } from "@sps/sps-subscription-frontend/lib/redux/entities/tier/interfaces";
import type { IEntity as IBackendFile } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.tiers-list-block";
  variant: "two-columns-card";
  title: string | null;
  subtitle: string | null;
  anchor: string | null;
  description: string | null;
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
  tiers?: IBackendTier[] | null;
  className: string | null;
}
