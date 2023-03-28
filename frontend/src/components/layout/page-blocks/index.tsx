import { FC } from "react";
import { pageBlockComponents } from "~utils/api/components";

export interface IPageBlock {
  _Component: keyof typeof pageBlockComponents;
}

export interface IPageBlocksComponent {
  pageBlocks: IPageBlock[];
}

export default function PageBlocks(props: IPageBlocksComponent) {
  return (
    <div className="page-blocks">
      {props.pageBlocks?.length
        ? props.pageBlocks.map((pageBlock, index) => {
            const key =
              pageBlock._Component as keyof typeof pageBlockComponents;
            const PageBlock = pageBlockComponents[key] as FC<any>;

            if (!PageBlock) {
              return <div key={`${index}-${key}`}></div>;
            }

            return (
              <PageBlock
                pageProps={props}
                {...pageBlock}
                key={`${index}-${key}`}
              />
            );
          })
        : null}
    </div>
  );
}
