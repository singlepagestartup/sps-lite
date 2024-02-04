import type { IModel as IContactSectonBlock } from "@sps/sps-crm-contracts/lib/models/contact-section-block/interfaces";
import type { IModel as IReviewsListBlock } from "@sps/sps-crm-contracts/lib/models/reviews-list-block/interfaces";
import type { IModel as IReviewsTableBlock } from "@sps/sps-crm-contracts/lib/models/reviews-table-block/interfaces";
import { Dispatch, SetStateAction } from "react";

type IPageBlock = IContactSectonBlock | IReviewsListBlock | IReviewsTableBlock;

export type IComponentProps = IPageBlock;

export type IComponentPropsExtended = IComponentProps & {
  isServer: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
};
