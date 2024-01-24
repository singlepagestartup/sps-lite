import type { IEntity as IBackendFile } from "libs/modules/sps-file-storage/frontend/src/lib/redux/entities/file/interfaces";
import type { IComponent as IBackendComponentButton } from "../../../elements/button/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.hero-section-block";
  variant: "simple-centered";
  className: string | null;
  title: string | null;
  description: string | null;
  buttons?: IBackendComponentButton[] | null;
  media?: IBackendFile[] | null;
  anchor: string | null;
  additionalMedia?: IBackendFile[];
}
