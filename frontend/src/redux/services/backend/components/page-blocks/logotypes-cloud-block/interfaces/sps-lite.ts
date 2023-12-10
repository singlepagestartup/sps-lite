import { ISpsLiteBackendComponentButton } from "../../../elements/button/interfaces/sps-lite";
import { ISpsLiteBackendComponentLogotype } from "../../../elements/logotype/interfaces/sps-lite";

export interface ISpsLiteBackendComponentLogotypesCloudBlock {
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
