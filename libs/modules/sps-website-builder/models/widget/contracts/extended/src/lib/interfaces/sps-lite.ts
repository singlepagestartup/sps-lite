import type { IModel as IParentModel } from "@sps/sps-website-builder-models-widget-contracts";
import { IModel as IWdigetsToHeroSectionBlocks } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-contracts";

export interface IModel extends IParentModel {
  SPSWBWidgetsToHeroSectionBlocks: IWdigetsToHeroSectionBlocks[];
}
