import { IRelation } from "@sps/sps-website-builder/relations/pages-to-layouts/contracts/root";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder/relations/pages-to-layouts/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "get-layout" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IRelation>;
  children?: React.ReactNode;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IRelationExtended;
}
