import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-metadata-to-sps-file-storage-module-files-contracts";
import { IModel as IMetadata } from "@sps/sps-website-builder-models-metadata-contracts";

export interface IRelation extends IParentRelation {
  metadata: IMetadata;
}
