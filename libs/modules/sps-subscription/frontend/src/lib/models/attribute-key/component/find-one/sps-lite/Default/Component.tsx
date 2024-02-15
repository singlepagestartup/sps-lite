import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="">
      <p className="capitalize">{props.data.title}</p>
    </div>
  );
}
