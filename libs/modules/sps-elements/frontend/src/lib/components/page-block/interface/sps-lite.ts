import type { IModel as IButton } from "../../../models/button/_model";
import type { IModel as IButtonsArray } from "../../../models/buttons-array/_model";
import { Dispatch, SetStateAction } from "react";

type IPageBlock = IButton | IButtonsArray;

export type IComponentProps = IPageBlock;

export type IComponentPropsExtended = IComponentProps & {
  isServer: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
};
