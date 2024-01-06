import { IComponent as IBackendComponentButton } from "../../../elements/button/interfaces";
import { IComponent as IBackendComponentLogotype } from "../../../elements/logotype/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.logotypes-cloud-block";
  variant: "simple-with-heading";
  title: string | null;
  subtitle: string | null;
  className: string | null;
  logotypes?: IBackendComponentLogotype[] | null;
  buttons?: IBackendComponentButton[] | null;
  description: string | null;
  anchor: string | null;
}
