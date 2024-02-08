"use client";

import { api } from "../../../api/client";
import { IComponentPropsExtended } from "../../interface";
import { Component as OrderProduct } from "../../../../order-product/component";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Input } from "@sps/ui-adapter";
import { Component as Invoice } from "@sps/sps-billing-frontend/lib/models/invoice/component";

export function Component(props: IComponentPropsExtended) {
  const [checkout, { data: checkoutData }] = api.useCheckoutMutation();

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

    await checkout({ id: props.id, data });
  }

  if (checkoutData?.invoice) {
    return (
      <Invoice isServer={false} variant="redirect" {...checkoutData.invoice} />
    );
  }

  return (
    <div className="border border-gray-500 rounded-md p-4 flex flex-col gap-2">
      {props.orderProducts?.map((orderProduct, index) => {
        return (
          <OrderProduct
            key={index}
            variant="default"
            isServer={false}
            {...orderProduct}
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
