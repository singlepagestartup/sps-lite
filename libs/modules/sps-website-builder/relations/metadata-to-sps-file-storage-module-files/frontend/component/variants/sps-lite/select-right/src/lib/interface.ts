import { IRelation } from "@sps/sps-website-builder-relations-metadata-to-sps-file-storage-module-files-contracts";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder-relations-metadata-to-sps-file-storage-module-files-contracts-extended";

export const variant = "select-right" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  metadataId?: string;
  data?: IRelation;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IRelationExtended;
}
