import { IEntity as IBackendFlyout } from "~redux/services/backend/extensions/sps-website-builder/api/flyout/interfaces";
import { IEntity as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";

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
