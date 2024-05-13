import { IRelation } from "@sps/sps-website-builder-relations-layouts-to-footers-contracts";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder-relations-layouts-to-footers-contracts-extended";

export const variant = "select-right" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  layoutId?: string;
  data?: IRelation;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IRelationExtended;
}
