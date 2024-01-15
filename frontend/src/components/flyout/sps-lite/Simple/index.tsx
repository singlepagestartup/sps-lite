import PageBlocks from "~components/page-blocks";
import { IFlyout } from "../..";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~components/ui/popover";

export default function Simple(props: IFlyout) {
  return (
    <Popover>
      <PopoverTrigger asChild={true}>{props.children}</PopoverTrigger>
      <PopoverContent>
        <div className="flyout-container">
          <PageBlocks
            pageBlocks={props.pageBlocks}
            showSkeletons={props.showSkeletons}
          />
        </div>
      </PopoverContent>
    </Popover>
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
