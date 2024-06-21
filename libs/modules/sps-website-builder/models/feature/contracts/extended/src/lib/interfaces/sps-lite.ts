import { IRelation as IFeaturesToSpsFileStorageModuleFiles } from "@sps/sps-website-builder/relations/features-to-sps-file-storage-module-files/contracts/root";
import type { IModel as IParentModel } from "@sps/sps-website-builder/models/feature/contracts/root";

export interface IModel extends IParentModel {
  featuresToSpsFileStorageModuleFiles: IFeaturesToSpsFileStorageModuleFiles[];
}
