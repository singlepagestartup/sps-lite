export { type IModel } from "@sps/sps-rbac/models/authentication/sdk/model";
import { IModel } from "@sps/sps-rbac/models/authentication/sdk/model";
import { ReactNode } from "react";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { NextRequestOptions } from "@sps/shared-utils";

export const variant = "is-authorized-wrapper" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  children: ReactNode;
  apiProps: {
    params: {
      action: {
        route: string;
        method: string;
        type?: "HTTP";
      };
    };
    options?: NextRequestOptions;
  };
}

export interface IComponentPropsExtended extends IComponentProps {}
