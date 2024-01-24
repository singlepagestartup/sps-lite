import type { IEntity as IBackendFile } from "libs/modules/sps-file-storage/frontend/src/lib/redux/entities/file/interfaces";
import type { IComponent as IBackendComponentFeature } from "../../../elements/feature/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.incentives-block";
  variant: "four-column-with-illustrations";
  features?: IBackendComponentFeature[] | null;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
  anchor: string | null;
}
