import type { IModel as IParentModel } from "@sps/sps-subscription-subscription-contracts";
import { IModel as ITier } from "@sps/sps-subscription-tier-contracts";
import type { IModel as IInvoice } from "@sps/sps-billing-invoice-contracts";
import type { IModel as IUser } from "@sps/sps-rbac-contracts/lib/models/user/interfaces";

export interface IModel extends IParentModel {
  user?: IUser | null;
  invoices?: IInvoice[] | null;
  tier?: ITier | null;
}
