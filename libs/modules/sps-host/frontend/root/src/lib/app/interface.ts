import { ISpsComponentBase } from "@sps/ui-adapter";
import { ReactNode } from "react";

export interface IComponentProps extends ISpsComponentBase {
  className?: string;
  variant: string;
  props?: string;
}

export interface IComponentPropsExtended extends IComponentProps {}
