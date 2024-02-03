import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentProps } from "./interface";
import { pageBlocks } from "./_aliases";
import { ReduxProvider } from "../../redux";

export function PageBlocks(props: IComponentProps) {
  return (
    <ReduxProvider>
      <div className="page-blocks">
        {props.pageBlocks?.length
          ? props.pageBlocks.map((pageBlock, index) => {
              const key = pageBlock.__component;

              if (!key) {
                throw new Error(
                  `PageBlock with index: "${index}" is missing __component`,
                );
              }

              // problem with conflicting types in some constituents
              // that is why here is any
              const PageBlock: any = pageBlocks[key];

              if (!PageBlock) {
                return <div key={`${index}-${key}`}></div>;
              }

              if (typeof PageBlock !== "function") {
                throw new Error(`PageBlock ${key} is not a function`);
              }

              return (
                <ErrorBoundary key={`${index}-${key}`}>
                  <div
                    data-component={pageBlock.__component}
                    data-variant={pageBlock.variant}
                    className={`${pageBlock.className || ""}`}
                  >
                    <PageBlock {...pageBlock} isServer={props.isServer} />
                  </div>
                </ErrorBoundary>
              );
            })
          : null}
      </div>
    </ReduxProvider>
  );
}
