import { IComponent as IParentComponent } from "@sps/sps-website-builder-contracts/lib/components/elements/feature/interfaces";
import type { IEntity as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";

export interface IComponent extends IParentComponent {
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
