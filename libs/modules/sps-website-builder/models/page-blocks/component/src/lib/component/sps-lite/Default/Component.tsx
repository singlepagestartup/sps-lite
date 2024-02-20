import { ErrorBoundary } from "@sps/ui-adapter";
import {
  pageBlocks,
  IPageBlock,
} from "@sps/sps-website-builder-page-blocks-contracts";
import { IComponentProps } from "./interface";

export function Component(props: IComponentProps) {
  return (
    <div className="page-blocks">
      {props.data?.pageBlocks?.length
        ? props.data.pageBlocks.map((pageBlock, index) => {
            return (
              <PageBlock
                key={index}
                isServer={props.isServer}
                data={pageBlock}
                setIsOpen={props.setIsOpen}
                closeModal={props.closeModal}
              />
            );
          })
        : null}
    </div>
  );
}

function PageBlock(props: {
  data: IPageBlock;
  isServer: IComponentProps["isServer"];
  setIsOpen: IComponentProps["setIsOpen"];
  closeModal: IComponentProps["closeModal"];
}) {
  const key = props.data.__component;

  if (!key) {
    throw new Error(
      `PageBlock with props: "${JSON.stringify(props)}" is missing __component`,
    );
  }

  // problem with conflicting types in some constituents
  // that is why here is any
  const PageBlock: any = pageBlocks[key as keyof typeof pageBlocks];

  if (typeof PageBlock == "function") {
    return (
      <ErrorBoundary>
        <PageBlock
          isServer={props.isServer}
          setIsOpen={props.setIsOpen}
          closeModal={props.closeModal}
          variant={props.data.variant}
          data={props.data}
        />
      </ErrorBoundary>
    );
  }

  return (
    <div
      data-component={props.data.__component}
      data-variant={props.data.variant}
      className={`${props.data.className || ""}`}
    ></div>
  );
}
