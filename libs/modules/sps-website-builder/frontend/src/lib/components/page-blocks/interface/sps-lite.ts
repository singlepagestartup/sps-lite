import { Dispatch, SetStateAction } from "react";
import { IComponentProps as IPageBlock } from "../../page-block/interface";

export interface IComponentProps {
  variant: "default";
  isServer: boolean;
  pageBlocks?: IPageBlock[] | null;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
}
