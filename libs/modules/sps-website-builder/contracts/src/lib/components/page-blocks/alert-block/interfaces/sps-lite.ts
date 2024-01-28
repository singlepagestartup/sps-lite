import type { IEntity as IFile } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/interfaces";
import type { IComponent as IButton } from "../../../elements/button/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.alert-block";
  variant: "centered";
  className: string | null;
  title: string | null;
  subtitle: string | null;
  anchor: string | null;
  description: string | null;
  buttons: IButton[] | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
