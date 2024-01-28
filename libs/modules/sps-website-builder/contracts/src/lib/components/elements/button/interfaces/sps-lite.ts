import type { IEntity as IFlyout } from "../../../../entities/flyout/interfaces";
import type { IEntity as IFile } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/interfaces";

export interface IComponent {
  id: number;
  __component?: "elements.button";
  variant:
    | "primary"
    | "secondary"
    | "locale"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";
  title: string | null;
  url: string | null;
  description: string | null;
  className: string | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
  flyout?: IFlyout | null;
  additionalAttributes: any | null;
}
