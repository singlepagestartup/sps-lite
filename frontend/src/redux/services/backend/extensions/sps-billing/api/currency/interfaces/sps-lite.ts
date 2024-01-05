import { IEntity as IBackendTier } from "~redux/services/backend/extensions/sps-billing/api/tier/interfaces";

export interface IEntity {
  id: number;
  title: string | null;
  unicode: string | null;
  isDefault: boolean | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tiers?: IBackendTier;
}
