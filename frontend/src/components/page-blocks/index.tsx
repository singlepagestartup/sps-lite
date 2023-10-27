import { ErrorBoundary } from "@sentry/nextjs";
import { Dispatch, FC, SetStateAction } from "react";
import { IBackendPageBlock } from "types/components/page-blocks";
import { pageBlockComponents } from "~utils/api/components";
import Error from "./features-sections/sps-lite/WithIcon/Error";

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
              <ErrorBoundary key={`${index}-${key}`} fallback={Error}>
                <div
                  data-component={pageBlock.__component}
                  data-variant={pageBlock.variant}
                  className={`${pageBlock.className || ""}`}
                  {...(pageBlock?.anchor ? { anchor: pageBlock.anchor } : {})}
                >
                  <PageBlock
                    pageProps={props}
                    {...pageBlock}
                    showSkeletons={props.showSkeletons}
                  />
                </div>
              </ErrorBoundary>
            );
          })
        : null}
    </div>
  );
}
