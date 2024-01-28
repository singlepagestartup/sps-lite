import type { IComponent as IButton } from "../../../elements/button/interfaces";
import type { IComponent as ILogotype } from "../../../elements/logotype/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.navbar-block";
  variant: "simple-links-on-left";
  className: string | null;
  description: string | null;
  logotype: ILogotype | null;
  buttons: IButton[] | null;
  additionalButtons: ILogotype[] | null;
  extraButtons: IButton[] | null;
}
