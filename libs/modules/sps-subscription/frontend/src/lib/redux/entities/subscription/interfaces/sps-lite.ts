import type { IEntity as IBackendTier } from "@sps/sps-subscription-frontend/lib/redux/entities/tier/interfaces";
import type { IEntity as IBackendInvoice } from "@sps/sps-billing-frontend/lib/redux/entites/invoice/interfaces";
import type { IEntity as IBackendUser } from "libs/modules/sps-rbac/frontend/src/lib/redux/entities/user/interfaces";

export interface IEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tier?: IBackendTier | null;
  user?: IBackendUser | null;
  invoices?: IBackendInvoice[] | null;
}
