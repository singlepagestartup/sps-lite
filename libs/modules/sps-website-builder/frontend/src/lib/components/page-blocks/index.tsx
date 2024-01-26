import { FC } from "react";
import { pageBlockComponents } from "../../../../../../../../apps/frontend/src/components/page-blocks/aliases/index";
import { ErrorBoundary } from "@sps/sps-website-builder-frontend";
import { IPage } from "../../redux/components/page-blocks/props";

export function PageBlocks(props: IPage) {
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
