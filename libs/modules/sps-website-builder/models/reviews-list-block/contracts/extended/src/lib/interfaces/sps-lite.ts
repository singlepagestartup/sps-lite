import type { IModel as IParentModel } from "@sps/sps-website-builder-models-reviews-list-block-contracts";
import type { IModel as IReview } from "@sps/sps-crm-models-review-contracts";

export interface IModel extends IParentModel {
  reviews?: IReview[] | null;
}
