import type { IEntity as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";
import type { IComponent as IButton } from "../../button/interfaces";

export interface IComponent {
  id: number;
  __component: "elements.buttons-array";
  variant: "column-with-title" | "row";
  title: string | null;
  additionalAttributes: any;
  buttons: IButton[];
  description: string | null;
  className: string | null;
  url: string | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
