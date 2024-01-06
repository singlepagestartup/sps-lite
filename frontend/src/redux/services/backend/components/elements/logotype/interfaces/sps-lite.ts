import { IEntity as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";

export interface IComponent {
  id: number;
  __component: "elements.logotype";
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
  url: string | null;
  title: string | null;
}
