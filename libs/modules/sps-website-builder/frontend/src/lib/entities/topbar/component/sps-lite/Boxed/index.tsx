import { PageBlocks } from "../../../../../components/page-blocks";
import { ITopbar } from "../..";

export default function Boxed(props: ITopbar) {
  return (
    <div ref={props.topbarRef} className={props.className || ""}>
      <div className="bg-white w-screen fixed z-40">
        <div className="mx-auto max-w-7xl">
          <PageBlocks
            page={props.page}
            pageBlocks={props.pageBlocks}
            showSkeletons={props.showSkeletons}
          />
        </div>
      </div>
    </div>
  );
}
