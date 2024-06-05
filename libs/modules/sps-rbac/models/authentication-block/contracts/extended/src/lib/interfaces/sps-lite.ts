import { IRelation as IWidgetsToAuthenticationBlocks } from "@sps/sps-rbac-relations-widgets-to-authentication-blocks-contracts";
import type { IModel as IParentModel } from "@sps/sps-rbac-models-authentication-block-contracts";

export interface IModel extends IParentModel {
  widgetsToAuthenticationBlocks: IWidgetsToAuthenticationBlocks[];
}
