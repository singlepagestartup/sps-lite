import { Dispatch, FC, SetStateAction } from "react";
import { IBackendPageBlock } from "types/components/page-blocks/sps-lite";
import { pageBlockComponents } from "~utils/api/components";

export interface IPageBlockBlock {
  pageBlocks?: IBackendPageBlock[] | null;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export default function PageBlocks(props: IPageBlockBlock) {
  return (
    <div className="page-blocks">
      {props?.pageBlocks?.length
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
