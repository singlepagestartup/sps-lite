import { IRelation } from "@sps/sps-website-builder-relations-pages-to-footers-contracts";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder-relations-pages-to-footers-contracts-extended";

export const variant = "default" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IRelation;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IRelationExtended;
}
