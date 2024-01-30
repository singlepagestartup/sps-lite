import { IComponent as IParentComponent } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/incentives-block/interfaces";
import type { IEntity as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";
import type { IComponent as IFeature } from "@sps/sps-website-builder-contracts/lib/components/elements/feature/interfaces";

export interface IComponent extends IParentComponent {
  features?: IFeature[] | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}