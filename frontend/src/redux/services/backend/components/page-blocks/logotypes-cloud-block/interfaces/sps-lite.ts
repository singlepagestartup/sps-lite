import { IBackendComponentElement as ISpsLiteBackendComponentButton } from "../../../elements/button/interfaces/sps-lite";
import { IBackendComponentElement as ISpsLiteBackendComponentLogotype } from "../../../elements/logotype/interfaces/sps-lite";

export interface IBackendComponentPageBlock {
  id: number;
  __component: "page-blocks.logotypes-cloud-block";
  variant: "simple-with-heading";
  title: string | null;
  subtitle: string | null;
  className: string | null;
  logotypes?: ISpsLiteBackendComponentLogotype[] | null;
  buttons?: ISpsLiteBackendComponentButton[] | null;
  description: string | null;
  anchor: string | null;
}
