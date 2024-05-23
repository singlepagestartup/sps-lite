import { IRelation } from "@sps/sps-website-builder-relations-footer-blocks-to-logotypes-contracts";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder-relations-footer-blocks-to-logotypes-contracts-extended";

export const variant = "select-right" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  footerBlockId?: string;
  data?: IRelation;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IRelationExtended;
}
