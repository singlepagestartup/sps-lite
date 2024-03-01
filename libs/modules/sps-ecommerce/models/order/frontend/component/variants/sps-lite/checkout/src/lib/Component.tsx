"use client";

import { api } from "@sps/sps-ecommerce-models-order-frontend-api";
import { IComponentPropsExtended } from "./interface";
import { Component as OrderProduct } from "@sps/sps-ecommerce-models-order-product-frontend-component";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Input } from "@sps/ui-adapter";
import { Component as Invoice } from "@sps/sps-billing-models-invoice-frontend-component";

export function Component(props: IComponentPropsExtended) {
  const [checkout, { data: checkoutData }] = api.rtk.useCheckoutMutation();

  const methods = useForm<any>({
    mode: "all",
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = methods;

  const watchData = watch();

  async function onSubmit(data: any) {
    console.log("🚀 ~ onSubmit ~ data:", data);

    await checkout({ id: props.data.id, data });
  }

  if (checkoutData?.invoice) {
    return (
      <Invoice isServer={false} variant="default" data={checkoutData.invoice} />
    );
  }

  return (
    <div
      data-module="sps-ecommerce"
      data-model="order"
      data-variant={props.variant}
      className="border border-gray-500 rounded-md p-4 flex flex-col gap-2"
    >
      {props.data.orderProducts?.map((orderProduct, index) => {
        return (
          <OrderProduct
            key={index}
            variant="default"
            isServer={false}
            data={orderProduct}
          />
        );
      })}
      <div className="py-4">
        <FormProvider {...methods}>
          <div className="flex flex-col gap-3">
            <Input
              type="text"
              ui="shadcn"
              name="email"
              label="Email"
              placeholder="Type your email"
            />
            <Button
              ui="shadcn"
              variant="primary"
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
