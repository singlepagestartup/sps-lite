import { IComponent as IParentComponent } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/footer-block/interfaces";
import { IComponent as IButtonsArray } from "@sps/sps-website-builder-contracts/lib/components/elements/buttons-array/interfaces";
import { IComponent as ILogotype } from "@sps/sps-website-builder-contracts/lib/components/elements/logotype/interfaces";

export interface IComponent extends IParentComponent {
  logotype: ILogotype | null;
  buttonsArrays: IButtonsArray[] | null;
  additionalButtonsArrays: IButtonsArray[] | null;
  extraButtonsArrays: IButtonsArray[] | null;
}
