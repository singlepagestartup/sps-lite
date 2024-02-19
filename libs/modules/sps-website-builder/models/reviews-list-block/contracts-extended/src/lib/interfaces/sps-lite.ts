import type { IModel as IParentModel } from "@sps/sps-website-builder-reviews-list-block-contracts";
import type { IModel as IReview } from "libs/modules/sps-crm/models/review/contracts/src/lib/interfaces";

export interface IModel extends IParentModel {
  reviews?: IReview[] | null;
}
