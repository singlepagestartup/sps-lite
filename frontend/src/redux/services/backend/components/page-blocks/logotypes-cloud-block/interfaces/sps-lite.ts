import { IBackendComponentElement as IBackendComponentButton } from "../../../elements/button/interfaces";
import { IBackendComponentElement as IBackendComponentLogotype } from "../../../elements/logotype/interfaces";

export interface IBackendComponentPageBlock {
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
