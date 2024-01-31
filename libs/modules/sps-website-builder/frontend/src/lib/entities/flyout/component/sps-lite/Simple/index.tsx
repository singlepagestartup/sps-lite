"use client";

import { PageBlocks } from "../../../../../components/page-blocks";
import { IComponentPropsExtended } from "../..";
import { Popover, PopoverContent, PopoverTrigger } from "@sps/shadcn";

export default function Simple(props: IComponentPropsExtended) {
  return <>{props.children}</>;

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild={true}>{props.children}</PopoverTrigger>
        <PopoverContent>
          <div className="flyout-container p-20 bg-red-400">
            {/* <PageBlocks
            page={props.page}
            pageBlocks={props.pageBlocks}
            showSkeletons={props.showSkeletons}
          /> */}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );

  // return (
  //   <Transition
  //     as={Fragment}
  //     enter="transition ease-out duration-200"
  //     enterFrom="opacity-0 translate-y-1"
  //     enterTo="opacity-100 translate-y-0"
  //     leave="transition ease-in duration-150"
  //     leaveFrom="opacity-100 translate-y-0"
  //     leaveTo="opacity-0 translate-y-1"
  //   >
  //     <Popover.Panel
  //       data-collection-type="flyout"
  //       data-variant={props.variant}
  //       className={props.className || ""}
  //     >
  //       <div className="flyout-container">
  //         <PageBlocks
  //           pageBlocks={props.pageBlocks}
  //           showSkeletons={props.showSkeletons}
  //         />
  //       </div>
  //     </Popover.Panel>
  //   </Transition>
  // );
}
