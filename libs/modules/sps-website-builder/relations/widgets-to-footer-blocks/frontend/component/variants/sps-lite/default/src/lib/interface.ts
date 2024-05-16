import { IRelation } from "@sps/sps-website-builder-relations-widgets-to-footer-blocks-contracts";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder-relations-widgets-to-footer-blocks-contracts-extended";

export const variant = "default" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: Partial<IRelation>;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IRelationExtended;
}
