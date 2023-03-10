import { IPageProps } from "types";
import Footers from "~components/page-blocks/footers";
import MetaBlock from "~components/page-blocks/meta";
import Navbar from "~components/page-blocks/headers";
import PageBlocks from "../page-blocks";

export default function Simple(props: IPageProps) {
  return (
    <>
      <MetaBlock {...props} />
      <div className="relative">
        <Navbar {...props} />
        <div className="pt-16">
          <PageBlocks {...props} />
        </div>
        <Footers {...props} />
      </div>
    </>
  );
}
