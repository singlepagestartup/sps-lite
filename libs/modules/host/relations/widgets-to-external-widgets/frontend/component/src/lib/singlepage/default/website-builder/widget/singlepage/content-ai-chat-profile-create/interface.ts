import type { ISpsComponentBase } from "@sps/ui-adapter";
import type { IModel } from "@sps/website-builder/models/widget/sdk/model";
export interface IComponentProps extends ISpsComponentBase {
  variant: "content-ai-chat-profile-create";
  data: IModel;
  language: string;
  url: string;
}
