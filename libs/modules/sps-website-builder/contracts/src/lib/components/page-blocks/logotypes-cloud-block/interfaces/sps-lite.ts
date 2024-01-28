import type { IComponent as IButton } from "../../../elements/button/interfaces";
import type { IComponent as ILogotype } from "../../../elements/logotype/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.logotypes-cloud-block";
  variant: "simple-with-heading";
  title: string | null;
  subtitle: string | null;
  className: string | null;
  logotypes?: ILogotype[] | null;
  buttons?: IButton[] | null;
  description: string | null;
  anchor: string | null;
}
