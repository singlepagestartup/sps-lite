import type { IRelation as IParentRelation } from "@sps/sps-rbac/relations/widgets-to-authentication-blocks/contracts/root";
import { IModel as IWidget } from "@sps/sps-rbac/models/widget/contracts/root";

import { IModel as IAuthenticationBlock } from "@sps/sps-rbac/models/authentication-block/contracts/root";

export interface IRelation extends IParentRelation {
  widget: IWidget;

  authenticationBlock: IAuthenticationBlock;
}
