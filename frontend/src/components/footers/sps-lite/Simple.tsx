import { ISpsLiteFooter } from ".";
import PageBlocks from "~components/page-blocks";

export default function Simple(props: ISpsLiteFooter) {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <PageBlocks pageBlocks={props.pageBlocks} />
      </div>
    </footer>
  );
}
