import type { IEntity as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";

export interface IComponent {
  id: number;
  __component: "elements.font";
  media?: IFile;
  weight: "light" | "regular" | "medium" | "semi_bold" | "bold";
  style: "normal" | "italic";
  variant: "primary" | "default";
}
