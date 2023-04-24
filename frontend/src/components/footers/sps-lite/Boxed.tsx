import { ISpsLiteFooter } from ".";
import PageBlocks from "~components/page-blocks";

export default function Boxed(props: ISpsLiteFooter) {
  return (
    <footer className={props.className || ""}>
      <div className="mx-auto max-w-7xl">
        <PageBlocks pageBlocks={props.pageBlocks} isLoading={props.isLoading} />
      </div>
    </footer>
  );
}
