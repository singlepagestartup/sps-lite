import { IEntity as ITier } from "../../tier/interfaces";
import type { IEntity as IInvoice } from "@sps/sps-billing-contracts/lib/entities/invoice/interfaces";
import type { IEntity as IUser } from "@sps/sps-rbac-contracts/lib/entities/user/interfaces";

export interface IEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tier?: ITier | null;
  user?: IUser | null;
  invoices?: IInvoice[] | null;
}
