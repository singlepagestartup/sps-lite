import { IRelation as IWidgetsToAuthenticationBlocks } from "@sps/sps-rbac/relations/widgets-to-authentication-blocks/contracts/root";
import type { IModel as IParentModel } from "@sps/sps-rbac/models/widget/contracts/root";

export interface IModel extends IParentModel {
  widgetsToAuthenticationBlocks: IWidgetsToAuthenticationBlocks[];
}
