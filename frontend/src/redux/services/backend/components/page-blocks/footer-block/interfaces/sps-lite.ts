import { IComponent as IBackendComponentButtonsArray } from "../../../elements/buttons-array/interfaces";
import { IComponent as IBackendComponentLogotype } from "../../../elements/logotype/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.footer-block";
  variant: "four-columns-with-company-mission";
  className: string | null;
  copyrights: string | null;
  description: string | null;
  logotype: IBackendComponentLogotype | null;
  buttonsArrays: IBackendComponentButtonsArray[] | null;
  additionalButtonsArrays: IBackendComponentButtonsArray[] | null;
  extraButtonsArrays: IBackendComponentButtonsArray[] | null;
}
