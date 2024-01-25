import type { IEntity as IBackendFlyout } from "@sps/sps-website-builder-frontend/lib/redux/entities/flyout/interfaces";
import type { IEntity as IBackendFile } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/interfaces";

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
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
  flyout?: IBackendFlyout | null;
  additionalAttributes: any | null;
}