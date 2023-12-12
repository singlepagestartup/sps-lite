import { IEntity as IBackendTier } from "~redux/services/backend/api/tier/interfaces";
import { IBackendExtensionUploadApiEntity as IBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.pricing-block";
  variant: "two-columns-card";
  title: string | null;
  subtitle: string | null;
  anchor: string | null;
  description: string | null;
  media?: IBackendExtensionUploadApiFile[] | null;
  additionalMedia?: IBackendExtensionUploadApiFile[] | null;
  tiers?: IBackendTier[] | null;
  className: string | null;
}
