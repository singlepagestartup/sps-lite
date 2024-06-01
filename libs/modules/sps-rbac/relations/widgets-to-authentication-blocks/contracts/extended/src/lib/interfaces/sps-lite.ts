import type { IRelation as IParentRelation } from "@sps/sps-rbac-relations-widgets-to-authentication-blocks-contracts";
import { IModel as IWidget } from "@sps/sps-rbac-models-widget-contracts";

import { IModel as IAuthenticationBlock } from "@sps/sps-rbac-models-authentication-block-contracts";

export interface IRelation extends IParentRelation {
  widget: IWidget;

  authenticationBlock: IAuthenticationBlock;
}
