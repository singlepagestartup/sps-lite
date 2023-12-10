import { ISpsLiteBackendComponentButtonsArray } from "../../../elements/buttons-array/interfaces/sps-lite";
import { ISpsLiteBackendComponentLogotype } from "../../../elements/logotype/interfaces/sps-lite";

export interface ISpsLiteBackendComponentFooterBlock {
  id: number;
  __component: "page-blocks.footer-block";
  variant: "four-columns-with-company-mission";
  className: string | null;
  copyrights: string | null;
  description: string | null;
  logotype: ISpsLiteBackendComponentLogotype | null;
  buttonsArrays: ISpsLiteBackendComponentButtonsArray[] | null;
  additionalButtonsArrays: ISpsLiteBackendComponentButtonsArray[] | null;
  extraButtonsArrays: ISpsLiteBackendComponentButtonsArray[] | null;
}
