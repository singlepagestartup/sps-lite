import { IRelation as IPagesToMetadata } from "@sps/sps-website-builder/relations/pages-to-metadata/contracts/root";
import { IRelation as IMetadataToSpsFileStorageModuleFiles } from "@sps/sps-website-builder/relations/metadata-to-sps-file-storage-module-files/contracts/root";
import type { IModel as IParentModel } from "@sps/sps-website-builder/models/metadata/contracts/root";

export interface IModel extends IParentModel {
  pagesToMetadata: IPagesToMetadata[];
  metadataToSpsFileStorageModuleFiles: IMetadataToSpsFileStorageModuleFiles[];
}
