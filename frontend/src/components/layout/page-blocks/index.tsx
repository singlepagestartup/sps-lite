import { FC } from "react";
import { IPageBlocksProps } from "types";
import { pageBlockComponents } from "~utils/api";

export default function PageBlocks(props: IPageBlocksProps) {
  return (
    <div className="page-blocks">
      {props.pageBlocks?.length
        ? props.pageBlocks.map((pageBlock, index) => {
            const key =
              pageBlock._Component as keyof typeof pageBlockComponents;
            const PageBlock = pageBlockComponents[key] as FC;

            if (!PageBlock) {
              return <div key={`${index}-${key}`}></div>;
            }

            return (
              <PageBlock {...props} {...pageBlock} key={`${index}-${key}`} />
            );
          })
        : null}
    </div>
  );
}
