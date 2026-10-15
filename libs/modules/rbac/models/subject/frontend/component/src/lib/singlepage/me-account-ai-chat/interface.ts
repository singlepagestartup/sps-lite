import type { IResult } from "@sps/rbac/models/subject/sdk/server";
import type { IComponentPropsExtended as IParentExtended } from "@sps/shared-frontend-components/singlepage/subject-default/interface";
import type { IModel } from "@sps/rbac/models/subject/sdk/model";
import type { IComponentProps as IParent } from "@sps/shared-frontend-components/singlepage/subject-default/interface";

export const variant = "me-account-ai-chat" as const;
export interface IComponentProps extends IParent<IModel, typeof variant> {
  language?: string;
  settingsSelected?: boolean;
}
export interface IComponentPropsExtended
  extends IParentExtended<IModel, typeof variant, IComponentProps> {
  accountProfile?: IResult["ISocialModuleProfileFindResult"][number];
  accountIdentities?: IResult["IIdentityFindResult"];
  accountAvatar?: IResult["ISocialModuleProfileFindByIdAvatarFindResult"];
  accountBalance?: IResult["IBillingModuleBalanceResult"];
}
