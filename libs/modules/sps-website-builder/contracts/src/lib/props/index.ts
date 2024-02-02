import { Dispatch, SetStateAction } from "react";

export interface IPage {
  isServer: boolean;
  pageBlocks?: any[] | null;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
}
