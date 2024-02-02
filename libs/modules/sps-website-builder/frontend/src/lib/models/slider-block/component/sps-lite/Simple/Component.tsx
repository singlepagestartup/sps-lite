import { Component as Slider } from "../../../../slider/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="max-w-7xl container mx-auto bg-white relative w-full my-10">
      <div className="w-full">
        {props.slider ? (
          <Slider isServer={props.isServer} {...props.slider} />
        ) : null}
      </div>
    </div>
  );
}
