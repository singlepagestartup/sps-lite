import { IRelation as IHeroSectionBlocksToSpsFileStorageWidgets } from "@sps/sps-website-builder/relations/hero-section-blocks-to-sps-file-storage-module-widgets/contracts/root";
import { IRelation as IHeroSectionBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/hero-section-blocks-to-buttons-arrays/contracts/root";
import type { IModel as IParentModel } from "@sps/sps-website-builder/models/hero-section-block/contracts/root";

export interface IModel extends IParentModel {
  heroSectionBlocksToSpsFileStorageWidgets: IHeroSectionBlocksToSpsFileStorageWidgets[];
  heroSectionBlocksToButtonsArrays: IHeroSectionBlocksToButtonsArrays[];
}
