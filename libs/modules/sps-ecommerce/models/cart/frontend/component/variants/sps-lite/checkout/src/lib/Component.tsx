"use client";

import { IComponentPropsExtended } from "./interface";
import { Component as Cart } from "@sps/sps-ecommerce-models-cart-frontend-component-variants-sps-lite-default";
import { api } from "@sps/sps-ecommerce-models-cart-frontend-api";
import { Component as Invoice } from "@sps/sps-billing-models-invoice-frontend-component";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Input } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  const [checkout, { data: checkoutData }] = api.rtk.useCheckoutMutation();

  const methods = useForm<any>({
    mode: "all",
  });

  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  const watchData = watch();

  async function onSubmit(data: any) {
    // data.tier = { id };
    console.log("🚀 ~ onSubmit ~ data:", data);

    await checkout({ id: props.data?.id, data });
  }

  if (checkoutData) {
    return (
      <Invoice isServer={false} variant="redirect" data={checkoutData as any} />
    );
  }

  return (
    <div
      data-module="sps-ecommerce"
      data-model="cart"
      data-variant={props.variant}
      className="w-full py-10 text-center flex flex-col gap-1"
    >
      <Cart isServer={false} variant="default" data={props.data} />
      <div>
        <FormProvider {...methods}>
          <div className="flex flex-col gap-3">
            <Input
              ui="sps"
              type="text"
              name="email"
              placeholder="Input your email"
              label="Email"
            />
            <Button
              ui="sps"
              data-ui-variant="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Buy
            </Button>
          </div>
        </FormProvider>
      </div>
    </div>
  );
}
