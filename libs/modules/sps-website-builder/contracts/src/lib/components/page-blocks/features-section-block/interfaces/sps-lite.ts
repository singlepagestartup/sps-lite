import type { IEntity as IFile } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/interfaces";
import type { IComponent as IFeature } from "../../../elements/feature/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.features-section-block";
  variant: "with-icon";
  features?: IFeature[] | null;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  anchor: string | null;
  className: string | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
