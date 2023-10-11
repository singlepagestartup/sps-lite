// import { ErrorBoundary } from "@sentry/nextjs";
import { Dispatch, FC, SetStateAction } from "react";
import { IBackendPageBlock } from "types/components/page-blocks";
import { pageBlockComponents } from "~utils/api/components";
// import Errors from "./errors";

export interface IPageBlockBlock {
  pageParams?: any;
  pageBlocks?: IBackendPageBlock[] | null;
  showSkeletons?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
}

export default function PageBlocks(props: IPageBlockBlock) {
  /**
   * Add error ErrorBoundary
   */
  return (
    <div className="page-blocks">
      {props.pageBlocks?.length
        ? props.pageBlocks.map((pageBlock, index) => {
            const key = pageBlock.__component;
            const PageBlock = pageBlockComponents[key] as FC<any>;

            if (!PageBlock) {
              return <div key={`${index}-${key}`}></div>;
            }

            return (
              <PageBlock
                pageProps={props}
                {...pageBlock}
                showSkeletons={props.showSkeletons}
                key={`${index}-${key}`}
              />
            );
          })
        : null}
    </div>
  );
}
