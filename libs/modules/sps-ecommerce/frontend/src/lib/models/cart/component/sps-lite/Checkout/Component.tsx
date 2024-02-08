import { IComponentPropsExtended } from "../../interface";
import { Component as Order } from "../../../../order/component";

export function Component(props: IComponentPropsExtended) {
  if (props.variant === "list") {
    return <></>;
  }

  return (
    <div className="w-full flex flex-col gap-2 border border-gray-500 rounded-md p-2">
      <p className="text-2xl font-bold">Orders</p>
      {props.orders?.map((order, index) => {
        return (
          <Order key={index} isServer={false} variant="checkout" {...order} />
        );
      })}
    </div>
  );
}
