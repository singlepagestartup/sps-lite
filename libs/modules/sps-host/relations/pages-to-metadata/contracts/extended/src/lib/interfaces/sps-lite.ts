import type { IRelation as IParentRelation } from "@sps/sps-host-relations-pages-to-metadata-contracts";
import { IModel as IPage } from "@sps/sps-host-models-page-contracts";

import { IModel as IMetadata } from "@sps/sps-host-models-metadata-contracts";

export interface IRelation extends IParentRelation {
  page: IPage;

  metadata: IMetadata;
}
