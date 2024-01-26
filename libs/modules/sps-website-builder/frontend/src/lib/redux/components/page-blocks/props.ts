import { Dispatch, SetStateAction } from "react";
import { IBackendComponentPageBlock } from "./interfaces";

export interface IPage {
  pageProps?: {
    params: {
      locale: string;
      url: string[];
    };
    searchParams: any;
  };
  page: any;
  pageBlocks?: IBackendComponentPageBlock[] | null;
  showSkeletons?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
}
