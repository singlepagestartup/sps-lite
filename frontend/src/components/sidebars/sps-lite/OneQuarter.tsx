import PageBlocks from "~components/page-blocks";
import { ISpsLiteSidebar } from ".";

export default function OneQuarter(props: ISpsLiteSidebar) {
  if (props.isLoading) {
    return (
      <div className={props.className || "h-full"}>
        <div className="h-full py-20 bg-slate-100 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className={props.className || ""}>
      <PageBlocks pageBlocks={props.pageBlocks} />
    </div>
  );
}
