import { IBackendComponentElement as ISpsLiteBackendComponentButton } from "../../../elements/button/interfaces/sps-lite";
import { IBackendComponentElement as ISpsLiteBackendComponentLogotype } from "../../../elements/logotype/interfaces/sps-lite";

export interface IBackendComponentPageBlock {
  id: number;
  __component: "page-blocks.navbar-block";
  variant: "simple-links-on-left";
  className: string | null;
  description: string | null;
  logotype: ISpsLiteBackendComponentLogotype | null;
  buttons: ISpsLiteBackendComponentButton[] | null;
  additionalButtons: ISpsLiteBackendComponentButton[] | null;
  extraButtons: ISpsLiteBackendComponentButton[] | null;
}
