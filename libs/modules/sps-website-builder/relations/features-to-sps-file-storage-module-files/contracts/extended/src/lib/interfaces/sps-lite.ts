import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/features-to-sps-file-storage-module-files/contracts/root";
import { IModel as IFeature } from "@sps/sps-website-builder/models/feature/contracts/root";

export interface IRelation extends IParentRelation {
  feature: IFeature;
}
