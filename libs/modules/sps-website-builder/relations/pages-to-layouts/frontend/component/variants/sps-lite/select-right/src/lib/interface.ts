import { IRelation } from "@sps/sps-website-builder-relations-pages-to-layouts-contracts";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder-relations-pages-to-layouts-contracts-extended";

export const variant = "select-right" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  pageId?: string;
  data?: IRelation;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IRelationExtended;
}
