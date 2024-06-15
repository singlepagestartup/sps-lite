import { IRelation } from "@sps/sps-website-builder-relations-features-section-blocks-to-features-contracts";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder-relations-features-section-blocks-to-features-contracts-extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "select-right" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  featuresSectionBlockId?: string;
  data?: IRelation;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IRelationExtended;
}
