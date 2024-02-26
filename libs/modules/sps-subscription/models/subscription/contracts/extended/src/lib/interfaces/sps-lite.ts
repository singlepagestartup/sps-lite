import type { IModel as IParentModel } from "@sps/sps-subscription-models-subscription-contracts";
import { IModel as ITier } from "@sps/sps-subscription-models-tier-contracts";
import type { IModel as IInvoice } from "@sps/sps-billing-models-invoice-contracts";
import type { IModel as IUser } from "@sps/sps-rbac-models-user-contracts";

export interface IModel extends IParentModel {
  user?: IUser | null;
  invoices?: IInvoice[] | null;
  tier?: ITier | null;
}
