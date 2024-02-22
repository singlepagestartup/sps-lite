import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return <p className="text-md font-bold">{props.data.unicode}</p>;
}
