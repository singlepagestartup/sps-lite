import { IEntity as IBackendTier } from "~redux/services/backend/extensions/sps-billing/api/tier/interfaces";
import { IEntity as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.pricing-block";
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
