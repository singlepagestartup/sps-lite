import type { IComponent as IButtonsArray } from "../../../elements/buttons-array/interfaces";
import type { IComponent as ILogotype } from "../../../elements/logotype/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.footer-block";
  variant: "four-columns-with-company-mission";
  className: string | null;
  copyrights: string | null;
  description: string | null;
  logotype: ILogotype | null;
  buttonsArrays: IButtonsArray[] | null;
  additionalButtonsArrays: IButtonsArray[] | null;
  extraButtonsArrays: IButtonsArray[] | null;
}
