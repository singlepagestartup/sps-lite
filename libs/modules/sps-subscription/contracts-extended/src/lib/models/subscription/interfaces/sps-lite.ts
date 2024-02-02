import type { IModel as IParentModel } from "@sps/sps-subscription-contracts/lib/models/subscription/interfaces";
import { IModel as ITier } from "@sps/sps-subscription-contracts/lib/models/tier/interfaces";
import type { IModel as IInvoice } from "@sps/sps-billing-contracts/lib/models/invoice/interfaces";
import type { IModel as IUser } from "@sps/sps-rbac-contracts/lib/models/user/interfaces";

export interface IModel extends IParentModel {
  user?: IUser | null;
  invoices?: IInvoice[] | null;
  tier?: ITier | null;
}
