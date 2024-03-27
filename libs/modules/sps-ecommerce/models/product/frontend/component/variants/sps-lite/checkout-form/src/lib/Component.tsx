"use client";

import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Input } from "@sps/ui-adapter";
import { api } from "@sps/sps-ecommerce-models-product-frontend-api";
import { Component as Invoice } from "@sps/sps-billing-models-invoice-frontend-component";

export function Component(props: IComponentPropsExtended) {
  const [singleStepCheckout, { data: singleStepCheckoutData }] =
    api.rtk.useSingleStepCheckoutMutation();

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

    await singleStepCheckout({ id: props.data?.id, data });
  }

  if (singleStepCheckoutData) {
    return (
      <Invoice
        isServer={false}
        variant="redirect"
        data={singleStepCheckoutData as any}
      />
    );
  }

  return (
    <div
      data-module="sps-ecommerce"
      data-model="product"
      data-variant={props.variant}
      className="flex flex-col text-gray-500"
    >
      <div className="w-3/12">
        {props.data.media?.length ? (
          <File
            variant="image"
            isServer={false}
            containerClassName="relative w-full aspect-w-2 aspect-h-2 overflow-hidden rounded-md bg-gray-100"
            className="object-cover object-center"
            data={props.data.media[0]}
          />
        ) : null}
      </div>
      <div className={"flex flex-col gap-2 py-6"}>
        <h3 className="font-medium text-gray-900">{props.data.title}</h3>

        {props.data.description ? (
          <div className="prose prose-sm max-w-none text-gray-500">
            <ReactMarkdown>{props.data.description}</ReactMarkdown>
          </div>
        ) : null}
      </div>
      <div>
        <FormProvider {...methods}>
          <div className="flex flex-col gap-3">
            <Input
              ui="sps"
              type="text"
              name="quantity"
              placeholder="Input quantity"
              initialValue={1}
              label="Quantity"
            />
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
