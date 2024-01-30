import { IComponent as IParentComponent } from "@sps/sps-website-builder-contracts/lib/components/elements/button/interfaces";
import type { IEntity as IFlyout } from "@sps/sps-website-builder-contracts/lib/entities/flyout/interfaces";
import type { IEntity as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";

export interface IComponent extends IParentComponent {
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
  flyout?: IFlyout | null;
}
