import { IComponent as IParentComponent } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/features-section-block/interfaces";
import type { IEntity as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";
import { IComponent as IFeature } from "@sps/sps-website-builder-contracts/lib/components/elements/feature/interfaces";

export interface IComponent extends IParentComponent {
  features?: IFeature[] | null;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
