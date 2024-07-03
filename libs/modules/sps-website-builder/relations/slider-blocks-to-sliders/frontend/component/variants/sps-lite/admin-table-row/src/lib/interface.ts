import { IRelation } from "@sps/sps-website-builder/relations/slider-blocks-to-sliders/contracts/root";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder/relations/slider-blocks-to-sliders/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "admin-table-row" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IRelation>;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IRelationExtended;
}
