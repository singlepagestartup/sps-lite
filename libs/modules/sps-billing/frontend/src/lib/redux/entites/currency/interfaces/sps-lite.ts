import { IEntity as IBackendTier } from "@sps/sps-subscription-frontend/lib/redux/entities/tier/interfaces";

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
