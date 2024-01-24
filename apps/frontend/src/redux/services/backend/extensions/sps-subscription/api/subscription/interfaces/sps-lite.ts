import { IEntity as IBackendTier } from "~redux/services/backend/extensions/sps-subscription/api/tier/interfaces";
import { IEntity as IBackendInvoice } from "~redux/services/backend/extensions/sps-billing/api/invoice/interfaces";
import { IEntity as IBackendUser } from "~redux/services/backend/extensions/users-permissions/api/user/interfaces";

export interface IEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tier?: IBackendTier | null;
  user?: IBackendUser | null;
  invoices?: IBackendInvoice[] | null;
}
