import { IComponentPropsExtended } from "../../interface";
import { Component as Attribute } from "../../../../attribute/component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="w-full border border-gray-500 p-4 rounded-md">
      {props.attributes?.map((attribute, index) => {
        return (
          <Attribute
            key={index}
            isServer={false}
            variant="default"
            {...attribute}
          />
        );
      })}
    </div>
  );
}
