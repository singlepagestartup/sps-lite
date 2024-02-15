import { IComponentPropsExtended } from "../../interface";
import { Component as Cart } from "../../../";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="w-full">
      {props.data.map((cart, index) => {
        return (
          <Cart key={index} isServer={false} variant="default" data={cart} />
        );
      })}
    </div>
  );
}
