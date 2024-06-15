import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-pages-to-metadata-contracts";
import { IModel as IPage } from "@sps/sps-website-builder-models-page-contracts";

import { IModel as IMetadata } from "@sps/sps-website-builder-models-metadata-contracts";

export interface IRelation extends IParentRelation {
  page: IPage;

  metadata: IMetadata;
}
