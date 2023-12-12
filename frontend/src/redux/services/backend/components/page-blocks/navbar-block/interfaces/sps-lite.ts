import { IBackendComponentElement as IBackendComponentButton } from "../../../elements/button/interfaces";
import { IBackendComponentElement as IBackendComponentLogotype } from "../../../elements/logotype/interfaces";

export interface IBackendComponentPageBlock {
  id: number;
  __component: "page-blocks.navbar-block";
  variant: "simple-links-on-left";
  className: string | null;
  description: string | null;
  logotype: IBackendComponentLogotype | null;
  buttons: IBackendComponentButton[] | null;
  additionalButtons: IBackendComponentButton[] | null;
  extraButtons: IBackendComponentButton[] | null;
}
