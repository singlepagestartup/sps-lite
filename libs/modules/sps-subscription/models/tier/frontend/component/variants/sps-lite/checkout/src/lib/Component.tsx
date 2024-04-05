"use client";

import { Button, Input } from "@sps/ui-adapter";
import { IComponentPropsExtended } from "./interface";
import { FormProvider, useForm } from "react-hook-form";
import { api } from "@sps/sps-subscription-models-tier-frontend-api-client";
import { Component as Invoice } from "@sps/sps-billing-models-invoice-frontend-component";

export function Component(props: IComponentPropsExtended) {
  const [createSubscription, { data: createSubscriptionData }] =
    api.rtk.useSubscribeMutation();

  const methods = useForm<any>({
    mode: "all",
  });

  const {
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = methods;

  async function onSubmit(data: any) {
    console.log("🚀 ~ onSubmit ~ data:", data);

    await createSubscription({ id: props.data.id, data });
  }

  if (createSubscriptionData) {
    return (
      <Invoice
        isServer={false}
        variant="redirect"
        data={createSubscriptionData as any}
      />
    );
  }

  return (
    <div
      data-module="sps-subscription"
      data-model="tier"
      data-variant={props.variant}
      className="w-full py-10 text-center flex flex-col gap-1"
    >
      <h1 className="text-6xl font-bold mb-8">{props.data.title}</h1>
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
            Subscribe
          </Button>
        </div>
      </FormProvider>
    </div>
  );
}
