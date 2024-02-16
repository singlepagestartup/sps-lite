import { IComponentPropsExtended } from "./interface";
import { Component as Invoice } from "../../";

export function Component(props: IComponentPropsExtended) {
  return (
    <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8 items-start">
      {props.data?.map((item, index) => {
        return (
          <Invoice isServer={false} key={index} variant="default" data={item} />
        );
      })}
    </div>
  );
}
