import PageBlocks from "~components/page-blocks";
import { ISpsLiteSidebar } from ".";

export default function OneQuarter(props: ISpsLiteSidebar) {
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
