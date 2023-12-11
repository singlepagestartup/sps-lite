import { Dispatch, FC, SetStateAction } from "react";
import { pageBlockComponents } from "~components/page-blocks/aliases";
import ErrorBoundary from "~components/wrappers/error-boundary";
import { IBackendComponentPageBlock } from "~redux/services/backend/components/page-blocks/interfaces";
import { IBackendComponentPageBlock as IBackendBackendComponentPageBlockSliderBlock } from "~redux/services/backend/components/page-blocks/slider-block/interfaces";

export interface IPageBlock
  extends IBackendBackendComponentPageBlockSliderBlock {
  showSkeletons?: boolean;
}

export interface IPageBlockBlock {
  pageParams?: any;
  pageBlocks?: IBackendComponentPageBlock[] | null;
  showSkeletons?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
}

export default function PageBlocks(props: IPageBlockBlock) {
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
              <ErrorBoundary key={`${index}-${key}`}>
                <div
                  data-component={pageBlock.__component}
                  data-variant={pageBlock.variant}
                  className={`${pageBlock.className || ""}`}
                  {...(pageBlock?.anchor ? { id: pageBlock.anchor } : {})}
                >
                  <PageBlock
                    pageProps={props}
                    showSkeletons={props.showSkeletons}
                    {...pageBlock}
                  />
                </div>
              </ErrorBoundary>
            );
          })
        : null}
    </div>
  );
}
