import { IRelation } from "@sps/sps-website-builder-relations-navbars-to-widgets-contracts";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder-relations-navbars-to-widgets-contracts-extended";

export const variant = "select-right" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  navbarId?: string;
  data?: IRelation;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IRelationExtended;
}
