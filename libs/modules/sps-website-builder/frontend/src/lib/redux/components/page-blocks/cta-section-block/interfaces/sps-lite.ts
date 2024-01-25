import type { IEntity as IBackendFile } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/interfaces";
import type { IComponent as IBackendComponentButton } from "../../../elements/button/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.cta-section-block";
  variant: "dark-with-image";
  title: string | null;
  subtitle: string | null;
  description: string | null;
  media?: IBackendFile[];
  additionalMedia?: IBackendFile[];
  anchor: string | null;
  className: string | null;
  buttons?: IBackendComponentButton[];
}
