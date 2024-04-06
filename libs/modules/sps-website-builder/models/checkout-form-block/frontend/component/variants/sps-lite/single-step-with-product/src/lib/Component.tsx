import { IComponentPropsExtended } from "./interface";
import { Component as Product } from "@sps/sps-ecommerce-models-product-frontend-component";
import { Component as PageGetUrlModelId } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-get-url-model-id";

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
      <PageGetUrlModelId
        isServer={props.isServer}
        variant="get-url-model-id"
        model="product"
      >
        {({ data: productId }) => {
          return (
            <Product
              isServer={props.isServer}
              variant="get-by-id"
              id={productId}
            >
              {({ data: product }) => {
                return (
                  <Product
                    isServer={props.isServer}
                    variant="checkout-form"
                    data={product}
                  />
                );
              }}
            </Product>
          );
        }}
      </PageGetUrlModelId>
    </div>
  );
}
