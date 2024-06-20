import { IComponentPropsExtended } from "./interface";
import Server from "./server";

export function Component(props: IComponentPropsExtended) {
  const Comp: any = Server;

  return <Comp {...props} />;
}
