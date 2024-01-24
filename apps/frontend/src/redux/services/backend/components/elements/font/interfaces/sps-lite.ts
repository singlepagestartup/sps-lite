import { IEntity as IBackendFile } from "libs/modules/sps-file-storage/frontend/src/lib/redux/entities/file/interfaces";

export interface IComponent {
  id: number;
  __component: "elements.font";
  media?: IBackendFile;
  weight: "light" | "regular" | "medium" | "semi_bold" | "bold";
  style: "normal" | "italic";
  variant: "primary" | "default";
}
