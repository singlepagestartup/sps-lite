import { IComponent as IPageBlock } from "../components/page-blocks/interfaces";
import { Dispatch, SetStateAction } from "react";

export interface IPage {
  pageBlocks?: IPageBlock[] | null;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
}
