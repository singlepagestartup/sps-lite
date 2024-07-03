import { IRelation } from "@sps/sps-website-builder/relations/widgets-to-slider-blocks/contracts/root";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder/relations/widgets-to-slider-blocks/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "admin-table" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  className?: string;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IRelationExtended[];
}
