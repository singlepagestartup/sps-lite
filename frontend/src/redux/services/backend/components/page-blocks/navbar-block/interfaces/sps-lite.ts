import { ISpsLiteBackendButton } from "../../../elements/button/interfaces/sps-lite";
import { ISpsLiteBackendLogotype } from "../../../elements/logotype/interfaces/sps-lite";

export interface ISpsLiteBackendNavbarBlock {
  id: number;
  __component: "page-blocks.navbar-block";
  variant: "simple-links-on-left";
  className: string | null;
  description: string | null;
  logotype: ISpsLiteBackendLogotype | null;
  buttons: ISpsLiteBackendButton[] | null;
  additionalButtons: ISpsLiteBackendButton[] | null;
  extraButtons: ISpsLiteBackendButton[] | null;
}
