import { IComponent as IContactSectionBlock } from "../contact-section-block/interfaces";
import { IComponent as IReviewsListBlock } from "../reviews-list-block/interfaces";
import { IComponent as IReviewsTableBlock } from "../reviews-table-block/interfaces";

export type IComponent =
  | IContactSectionBlock
  | IReviewsListBlock
  | IReviewsTableBlock;
