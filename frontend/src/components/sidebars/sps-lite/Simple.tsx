import PageBlocks from "~components/page-blocks";
import { ISpsLiteSidebar } from ".";

export default function Simple(props: ISpsLiteSidebar) {
  if (props.isLoading) {
    return (
      <div className={props.className || "h-full"}>
        <div className="sidebar__simple">
          <div className="h-full py-20 bg-slate-100 animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={props.className || ""}>
      <div className="sidebar__simple">
        <PageBlocks pageBlocks={props.pageBlocks} />
      </div>
    </div>
  );
}
