import { ISpsLiteFooter } from ".";
import PageBlocks from "~components/page-blocks";

export default function Boxed(props: ISpsLiteFooter) {
  if (props.isLoading) {
    return (
      <footer className={props.className || ""}>
        <div className="mx-auto max-w-7xl px-2 py-2">
          <div className="h-32 bg-slate-100 animate-pulse rounded-md"></div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={props.className || ""}>
      <div className="mx-auto max-w-7xl">
        <PageBlocks pageBlocks={props.pageBlocks} />
      </div>
    </footer>
  );
}
