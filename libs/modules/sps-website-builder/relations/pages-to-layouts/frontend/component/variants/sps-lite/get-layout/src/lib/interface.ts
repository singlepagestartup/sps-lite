import { IRelation } from "@sps/sps-website-builder-relations-pages-to-layouts-contracts";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder-relations-pages-to-layouts-contracts-extended";

export const variant = "get-layout" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: Partial<IRelation>;
  children?: React.ReactNode;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IRelationExtended;
}
