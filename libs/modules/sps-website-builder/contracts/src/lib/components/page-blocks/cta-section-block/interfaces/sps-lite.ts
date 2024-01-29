import type { IEntity as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";
import type { IComponent as IButton } from "../../../elements/button/interfaces";

export interface IComponent {
  id: number;
  __component: "page-blocks.cta-section-block";
  variant: "dark-with-image";
  title: string | null;
  subtitle: string | null;
  description: string | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
  anchor: string | null;
  className: string | null;
  buttons?: IButton[];
}
