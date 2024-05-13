import { IComponentPropsExtended } from "./interface";
// import { Component as Invoice } from "@sps/sps-billing-invoice-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-billing"
      data-model="invoice"
      data-variant={props.variant}
      className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8 items-start"
    >
      {/* {props.data?.map((item, index) => {
        return (
          <Invoice isServer={false} key={index} variant="default" data={item} />
        );
      })} */}
    </div>
  );
}
