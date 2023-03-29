import { Dispatch, FC, SetStateAction } from "react";
import { IPageBlock } from "types";
import { pageBlockComponents } from "~utils/api/components";

export interface IPageBlockLayout {
  pageBlocks: IPageBlock[];
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export default function PageBlocks(props: IPageBlockLayout) {
  return (
    <div className="page-blocks">
      {props.pageBlocks?.length
        ? props.pageBlocks.map((pageBlock, index) => {
            const key = pageBlock._Component;
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
