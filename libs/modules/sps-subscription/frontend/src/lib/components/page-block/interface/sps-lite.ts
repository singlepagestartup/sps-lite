import type { IModel as IEditSubscriptionBlock } from "../../../models/edit-subscription-block/_model";
import type { IModel as ITiersListBlock } from "../../../models/tiers-list-block/_model";
import { Dispatch, SetStateAction } from "react";

type IPageBlock = IEditSubscriptionBlock | ITiersListBlock;

export type IComponentProps = IPageBlock;

export type IComponentPropsExtended = IComponentProps & {
  isServer: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
};
