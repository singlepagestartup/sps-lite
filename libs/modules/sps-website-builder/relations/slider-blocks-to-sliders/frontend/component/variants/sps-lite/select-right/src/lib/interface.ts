import { IRelation } from "@sps/sps-website-builder-relations-slider-blocks-to-sliders-contracts";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder-relations-slider-blocks-to-sliders-contracts-extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "select-right" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  sliderBlockId?: string;
  data?: IRelation;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IRelationExtended;
}
