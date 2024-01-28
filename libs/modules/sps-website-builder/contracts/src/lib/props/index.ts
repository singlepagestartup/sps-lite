import { IComponent as IPageBlock } from "../components/page-blocks/interfaces";
import { Dispatch, SetStateAction } from "react";

export interface IPage {
  pageProps?: {
    params: {
      locale: string;
      url: string[];
    };
    searchParams: any;
  };
  page: any;
  pageBlocks?: IPageBlock[] | null;
  showSkeletons?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
}
