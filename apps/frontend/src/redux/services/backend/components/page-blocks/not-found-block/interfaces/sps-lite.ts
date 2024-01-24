import { IEntity as IBackendFile } from "libs/modules/sps-file-storage/frontend/src/lib/redux/entities/file/interfaces";
import { IComponent as IBackendComponentButton } from "../../../elements/button/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.not-found-block";
  variant: "simple";
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  buttons?: IBackendComponentButton[] | null;
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
  anchor: string | null;
}
