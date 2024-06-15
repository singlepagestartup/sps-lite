import { IRelation } from "@sps/sps-website-builder-relations-metadata-to-sps-file-storage-module-files-contracts";
import { IRelation as IRelationExtended } from "@sps/sps-website-builder-relations-metadata-to-sps-file-storage-module-files-contracts-extended";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "select-right" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  metadataId?: string;
  data?: IRelation;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IRelationExtended;
}
