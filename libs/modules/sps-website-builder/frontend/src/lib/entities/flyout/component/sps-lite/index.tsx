import Simple from "./Simple";
import { IComponentProps, IComponentPropsExtended } from "..";

export const variants = {
  simple: Simple,
};

// export default function SpsLite(
//   props: IComponentProps | IComponentPropsExtended,
// ) {
//   console.log(`🚀 ~ props:`, props);

//   // const Comp = variants[props.flyout.variant as keyof typeof variants];

//   return <div>{props.children}</div>;
//   // return <Comp {...props} />;
// }
