import { Dispatch, FC, SetStateAction } from "react";
import { pageBlockComponents } from "./aliases/index";
import ErrorBoundary from "../wrappers/error-boundary";
import { IBackendComponentPageBlock } from "@sps/sps-website-builder-frontend/lib/redux/components/page-blocks/interfaces";

export interface IPage {
  pageProps?: any;
  pageBlocks?: IBackendComponentPageBlock[] | null;
  showSkeletons?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
}

export default function PageBlocks(props: IPage) {
  return (
    <div className="page-blocks">
      {props.pageBlocks?.length
        ? props.pageBlocks.map((pageBlock, index) => {
            const key =
              pageBlock.__component as keyof typeof pageBlockComponents;
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