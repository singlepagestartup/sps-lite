import { Dispatch, SetStateAction } from "react";
import { IBackendComponentPageBlock } from "./interfaces";

export interface IPage {
  pageProps?: any;
  pageBlocks?: IBackendComponentPageBlock[] | null;
  showSkeletons?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
}
