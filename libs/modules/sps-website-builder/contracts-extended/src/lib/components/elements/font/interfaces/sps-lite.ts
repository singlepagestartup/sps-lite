import { IComponent as IParentComponent } from "@sps/sps-website-builder-contracts/lib/components/elements/font/interfaces";
import type { IEntity as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";

export interface IComponent extends IParentComponent {
  media?: IFile;
}
