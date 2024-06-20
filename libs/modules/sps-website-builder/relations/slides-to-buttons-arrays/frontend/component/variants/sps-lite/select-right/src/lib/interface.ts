import { IRelation } from "@sps/sps-website-builder/relations/slides-to-buttons-arrays/contracts/root";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder/relations/slides-to-buttons-arrays/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "select-right" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  slideId?: string;
  data?: IRelation;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IRelationExtended;
}
