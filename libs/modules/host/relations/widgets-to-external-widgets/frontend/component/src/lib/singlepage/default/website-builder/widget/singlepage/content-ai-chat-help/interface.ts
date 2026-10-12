import type { ISpsComponentBase } from "@sps/ui-adapter";
import type { IModel } from "@sps/website-builder/models/widget/sdk/model";
export interface IComponentProps extends ISpsComponentBase {
  variant: "content-ai-chat-help";
  data: IModel;
  language: string;
  url: string;
}
