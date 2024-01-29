import type { IEntity as IParentEntity } from "@sps/sps-subscription-contracts/lib/entities/subscription/interfaces";
import { IEntity as ITier } from "@sps/sps-subscription-contracts/lib/entities/tier/interfaces";
import type { IEntity as IInvoice } from "@sps/sps-billing-contracts/lib/entities/invoice/interfaces";
import type { IEntity as IUser } from "@sps/sps-rbac-contracts/lib/entities/user/interfaces";

export interface IEntity extends IParentEntity {
  user?: IUser | null;
  invoices?: IInvoice[] | null;
  tier?: ITier | null;
}
