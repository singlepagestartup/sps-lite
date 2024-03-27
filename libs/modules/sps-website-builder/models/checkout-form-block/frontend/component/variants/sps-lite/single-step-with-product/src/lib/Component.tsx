import { IComponentPropsExtended } from "./interface";
import { Component as Product } from "@sps/sps-ecommerce-models-product-frontend-component";
import { IModel as IProduct } from "@sps/sps-ecommerce-models-product-contracts-extended";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.checkout-form-block"
      data-variant={props.variant}
      className="mx-auto max-w-7xl py-16 px-2 lg:px-0"
    >
      <p className="text-4xl font-bold pt-10 pb-2">Checkout Form Block</p>
      <p className="text-2xl pb-10">SingleStepWithProduct</p>
      <Product isServer={props.isServer} variant="get-from-url">
        {({ data }: { data: IProduct }) => {
          return (
            <Product
              isServer={props.isServer}
              variant="checkout-form"
              data={data}
            />
          );
        }}
      </Product>
    </div>
  );
}
