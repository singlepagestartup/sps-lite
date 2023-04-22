import { ISpsLiteFooter } from ".";
import PageBlocks from "~components/page-blocks";

export default function Simple(props: ISpsLiteFooter) {
  if (props.isLoading) {
    return (
      <footer
        className="bg-slate-100 animate-pulse"
        aria-labelledby="footer-heading"
      >
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="h-32"></div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <PageBlocks pageBlocks={props.pageBlocks} />
      </div>
    </footer>
  );
}
