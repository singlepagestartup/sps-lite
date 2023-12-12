import { IBackendApiEntity as IBackendApiTier } from "~redux/services/backend/api/tier/interfaces";

export interface IBackendApiEntity {
  id: number;
  title: string | null;
  unicode: string | null;
  isDefault: boolean | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tiers?: IBackendApiTier;
}
