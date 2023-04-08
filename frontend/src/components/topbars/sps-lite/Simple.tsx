import { ISpsLiteTopbar } from ".";
import PageBlocks from "~components/page-blocks";

export default function Simple(props: ISpsLiteTopbar) {
  return (
    <div className="bg-white w-screen fixed z-30">
      <div className="mx-auto max-w-7xl px-2 flex justify-between items-center h-10">
        <PageBlocks pageBlocks={props.pageBlocks} />
      </div>
    </div>
  );
}
