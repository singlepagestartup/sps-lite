import { ISpsComponentBase } from "@sps/ui-adapter";
import { ReactNode } from "react";

export interface IComponentProps extends ISpsComponentBase {
  children?: ReactNode;
}

export interface IComponentPropsExtended extends IComponentProps {}
