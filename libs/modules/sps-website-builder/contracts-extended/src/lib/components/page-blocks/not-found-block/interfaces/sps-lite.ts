import { IComponent as IParentComponent } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/not-found-block/interfaces";
import type { IEntity as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";
import type { IComponent as IButton } from "@sps/sps-website-builder-contracts/lib/components/elements/button/interfaces";

export interface IComponent extends IParentComponent {
  buttons?: IButton[] | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
