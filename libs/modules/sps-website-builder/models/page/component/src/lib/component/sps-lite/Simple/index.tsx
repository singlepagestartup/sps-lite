import { IComponentPropsExtended } from "./interface";
import Server from "./server";

export function Simple(props: IComponentPropsExtended) {
  const Comp = Server;

  return <Comp {...props} />;
}
