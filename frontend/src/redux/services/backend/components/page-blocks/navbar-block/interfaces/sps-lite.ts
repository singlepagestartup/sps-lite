import { IComponent as IBackendComponentButton } from "../../../elements/button/interfaces";
import { IComponent as IBackendComponentLogotype } from "../../../elements/logotype/interfaces";

export interface IComponent {
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
