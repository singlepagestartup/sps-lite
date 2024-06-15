import { ISpsComponentBase } from "@sps/ui-adapter";

export const variants = ["default"] as const;

export interface IComponentProps extends ISpsComponentBase {
  className?: string;
  variant: (typeof variants)[number];
  data: {
    id: string;
  };
}

export interface IComponentPropsExtended extends IComponentProps {}
