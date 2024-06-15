import { IRelation } from "@sps/sps-website-builder-relations-widgets-to-slider-blocks-contracts";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder-relations-widgets-to-slider-blocks-contracts-extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "select-right" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  widgetId?: string;
  data?: IRelation;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IRelationExtended;
}
