import { ISpsLiteTopbar } from ".";
import PageBlocks from "~components/page-blocks";

export default function Boxed(props: ISpsLiteTopbar) {
  if (props.isLoading) {
    return (
      <div ref={props.topbarRef} className={props.className || ""}>
        <div className="bg-white w-screen fixed z-40">
          <div className="mx-auto max-w-7xl p-2">
            <div className="h-10 w-full bg-slate-100 animate-pulse rounded-md"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={props.topbarRef} className={props.className || ""}>
      <div className="bg-white w-screen fixed z-40">
        <div className="mx-auto max-w-7xl">
          <PageBlocks pageBlocks={props.pageBlocks} />
        </div>
      </div>
    </div>
  );
}
