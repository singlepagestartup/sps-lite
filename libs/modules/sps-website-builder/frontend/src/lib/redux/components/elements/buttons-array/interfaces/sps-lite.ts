import type { IEntity as IBackendFile } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/interfaces";
import type { IComponent as IBackendComponentButton } from "../../button/interfaces";

export interface IComponent {
  id: number;
  __component: "elements.buttons-array";
  variant: "column-with-title" | "row";
  title: string | null;
  additionalAttributes: any;
  buttons: IBackendComponentButton[];
  description: string | null;
  className: string | null;
  url: string | null;
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
}
