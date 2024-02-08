import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/reviews-list-block/interfaces";
import type { IModel as IReview } from "@sps/sps-crm-contracts/lib/models/review/interfaces";

export interface IModel extends IParentModel {
  reviews?: IReview[] | null;
}
