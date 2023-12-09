import { ISpsLiteBackendButtonsArray } from "../../../elements/buttons-array/interfaces/sps-lite";
import { ISpsLiteBackendLogotype } from "../../../elements/logotype/interfaces/sps-lite";

export interface ISpsLiteBackendFooterBlock {
  id: number;
  __component: "page-blocks.footer-block";
  variant: "four-columns-with-company-mission";
  className: string | null;
  copyrights: string | null;
  description: string | null;
  logotype: ISpsLiteBackendLogotype | null;
  buttonsArrays: ISpsLiteBackendButtonsArray[] | null;
  additionalButtonsArrays: ISpsLiteBackendButtonsArray[] | null;
  extraButtonsArrays: ISpsLiteBackendButtonsArray[] | null;
}
