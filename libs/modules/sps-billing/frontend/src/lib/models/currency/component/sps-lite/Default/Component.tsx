import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return <p className="text-md font-bold">{props.unicode}</p>;
}
