import { IRelation as IPagesToMetadata } from "@sps/sps-host-relations-pages-to-metadata-contracts";
import type { IModel as IParentModel } from "@sps/sps-host-models-metadata-contracts";

export interface IModel extends IParentModel {
  pagesToMetadata: IPagesToMetadata[];
}
