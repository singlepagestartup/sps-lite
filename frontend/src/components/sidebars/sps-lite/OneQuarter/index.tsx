import PageBlocks from "~components/page-blocks";
import { ISidebar } from "../..";

export default function OneQuarter(props: ISidebar) {
  return (
    <div
      data-collection-type="sidebar"
      data-variant={props.variant}
      className={props.className || ""}
    >
      <PageBlocks
        pageBlocks={props.pageBlocks}
        showSkeletons={props.showSkeletons}
      />
    </div>
  );
}
