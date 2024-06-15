import { IRelation } from "@sps/sps-website-builder-relations-layouts-to-footers-contracts";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder-relations-layouts-to-footers-contracts-extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "default" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IRelation>;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IRelationExtended;
}
