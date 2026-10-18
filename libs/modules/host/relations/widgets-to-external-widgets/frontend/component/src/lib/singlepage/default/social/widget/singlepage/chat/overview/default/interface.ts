import { ISpsComponentBase } from "@sps/ui-adapter";
import { IModel } from "@sps/social/models/widget/sdk/model";

export type IComponentProps = ISpsComponentBase & {
  language: string;
  url: string;
  routeParams?: Record<string, string>;
  data: IModel;
  variant: string;
};
