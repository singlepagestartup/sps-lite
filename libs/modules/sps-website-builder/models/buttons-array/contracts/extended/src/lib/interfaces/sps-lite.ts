import { IRelation as ISlidesToButtonsArrays } from "@sps/sps-website-builder/relations/slides-to-buttons-arrays/contracts/root";
import { IRelation as IFooterBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/footer-blocks-to-buttons-arrays/contracts/root";
import { IRelation as IButtonsArraysToButtons } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/contracts/root";
import { IRelation as IHeroSectionBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/hero-section-blocks-to-buttons-arrays/contracts/root";
import { IRelation as INavbarBlocksToButtonsArrays } from "@sps/sps-website-builder/relations/navbar-blocks-to-buttons-arrays/contracts/root";
import type { IModel as IParentModel } from "@sps/sps-website-builder/models/buttons-array/contracts/root";
import type { IModel as IButton } from "@sps/sps-website-builder/models/button/contracts/root";

export interface IModel extends IParentModel {
  slidesToButtonsArrays: ISlidesToButtonsArrays[];
  footerBlocksToButtonsArrays: IFooterBlocksToButtonsArrays[];
  buttonsArraysToButtons: IButtonsArraysToButtons[];
  heroSectionBlocksToButtonsArrays: IHeroSectionBlocksToButtonsArrays[];
  navbarBlocksToButtonsArrays: INavbarBlocksToButtonsArrays[];
  buttons: IButton[];
}
