import type { IModel as IParentModel } from "@sps/sps-subscription-subscription-contracts";
import { IModel as ITier } from "@sps/sps-subscription-tier-contracts";
import type { IModel as IInvoice } from "@sps/sps-billing-models-invoice-contracts";
import type { IModel as IUser } from "@sps/sps-rbac-user-contracts";

export interface IModel extends IParentModel {
  user?: IUser | null;
  invoices?: IInvoice[] | null;
  tier?: ITier | null;
}
