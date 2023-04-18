import { ISpsLiteMenu } from ".";
import PageBlocks from "~components/page-blocks";

export default function Simple(props: ISpsLiteMenu) {
  return <PageBlocks pageBlocks={props.pageBlocks} />;
}
