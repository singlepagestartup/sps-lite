import PageBlocks from "~components/page-blocks";
import { ISpsLiteSidebar } from ".";

export default function OneQuarter(props: ISpsLiteSidebar) {
  return (
    <div className={props.className || ""}>
      <PageBlocks
        pageBlocks={props.pageBlocks}
        showSkeletons={props.showSkeletons}
      />
    </div>
  );
}
