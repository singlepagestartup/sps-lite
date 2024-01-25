import { IEntity as IBackendTier } from "../../tier/interfaces/index";
import type { IEntity as IBackendInvoice } from "@sps/sps-billing-frontend/lib/redux/entities/invoice/interfaces";
import type { IEntity as IBackendUser } from "@sps/sps-rbac-frontend/lib/redux/entities/user/interfaces";

export interface IEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tier?: IBackendTier | null;
  user?: IBackendUser | null;
  invoices?: IBackendInvoice[] | null;
}
