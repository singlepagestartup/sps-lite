import { IRelation as IHeroSectionBlocksToButtonsArrays } from "@sps/sps-website-builder-relations-hero-section-blocks-to-buttons-arrays-contracts";
import type { IModel as IParentModel } from "@sps/sps-website-builder-models-hero-section-block-contracts";
import type { IModel as IFile } from "@sps/sps-file-storage-models-file-contracts";
import type { IModel as IButton } from "@sps/sps-website-builder-models-button-contracts";
import { IRelation as IHeroSectionBlockToFile } from "@sps/sps-website-builder-relations-hero-section-blocks-to-files-contracts";

export interface IModel extends IParentModel {
  heroSectionBlocksToButtonsArrays: IHeroSectionBlocksToButtonsArrays[];
  buttons?: IButton[] | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
  heroSectionBlocksToFiles: IHeroSectionBlockToFile[];
}
