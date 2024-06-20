import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/pages-to-metadata/contracts/root";
import { IModel as IPage } from "@sps/sps-website-builder/models/page/contracts/root";

import { IModel as IMetadata } from "@sps/sps-website-builder/models/metadata/contracts/root";

export interface IRelation extends IParentRelation {
  page: IPage;

  metadata: IMetadata;
}
