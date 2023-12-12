import { IEntity as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";
import { IComponent as IBackendComponentButton } from "../../../elements/button/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.alert-block";
  variant: "centered";
  className: string | null;
  title: string | null;
  subtitle: string | null;
  anchor: string | null;
  description: string | null;
  buttons: IBackendComponentButton[] | null;
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
}
