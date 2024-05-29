import { IRelation } from "@sps/sps-website-builder-relations-hero-section-blocks-to-sps-file-storage-widgets-contracts";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder-relations-hero-section-blocks-to-sps-file-storage-widgets-contracts-extended";

export const variant = "select-right" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  heroSectionBlockId?: string;
  data?: IRelation;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IRelationExtended;
}
