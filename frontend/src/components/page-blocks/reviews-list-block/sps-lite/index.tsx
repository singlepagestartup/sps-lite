import { IPageBlock } from "..";
import SimpleWithAvatars from "./SimpleWithAvatars";

export const variants = {
  "simple-with-avatars": SimpleWithAvatars,
};

export default function SpsLite(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
