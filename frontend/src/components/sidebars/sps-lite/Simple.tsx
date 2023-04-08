import PageBlocks from "~components/page-blocks";
import { ISpsLiteSidebar } from ".";

export default function Simple(props: ISpsLiteSidebar) {
  return (
    <div className={props.className || ``}>
      <div className="sidebar__simple">
        <PageBlocks pageBlocks={props.pageBlocks} />
      </div>
    </div>
  );
}
