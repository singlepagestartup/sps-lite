import { ISpsLiteBackendButton } from "../../../elements/button/interfaces/sps-lite";
import { ISpsLiteBackendLogotype } from "../../../elements/logotype/interfaces/sps-lite";

export interface ISpsLiteBackendLogotypesCloudBlock {
  id: number;
  __component: "page-blocks.logotypes-cloud-block";
  variant: "simple-with-heading";
  title: string | null;
  subtitle: string | null;
  className: string | null;
  logotypes?: ISpsLiteBackendLogotype[] | null;
  buttons?: ISpsLiteBackendButton[] | null;
  description: string | null;
  anchor: string | null;
}
