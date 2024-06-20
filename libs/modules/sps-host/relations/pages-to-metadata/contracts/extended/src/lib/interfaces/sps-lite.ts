import type { IRelation as IParentRelation } from "@sps/sps-host/relations/pages-to-metadata/contracts/root";
import { IModel as IPage } from "@sps/sps-host/models/page/contracts/root";

import { IModel as IMetadata } from "@sps/sps-host/models/metadata/contracts/root";

export interface IRelation extends IParentRelation {
  page: IPage;

  metadata: IMetadata;
}
