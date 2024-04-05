"use client";

import { FormProvider, useForm } from "react-hook-form";
import { IComponentPropsExtended } from "./interface";
import { Button, Input } from "@sps/ui-adapter";
import { api } from "@sps/sps-subscription-models-subscription-frontend-api-client";

export function Component(props: IComponentPropsExtended) {
  const [updateByEmail, { data: updateByEmailData }] =
    api.rtk.useUpdateByEmailMutation();

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

  async function updateByEmailSubmit(data: any) {
    console.log("🚀 ~ onSubmit ~ data:", data);
    data.status = "canceled";

    await updateByEmail({ data });
  }

  return (
    <div
      data-module="sps-subscription"
      data-model="subscription"
      data-variant={props.variant}
      className="w-full py-10 text-center flex flex-col gap-1"
    >
      <div className="">
        <div className="relative">
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <FormProvider {...methods}>
              <div className="flex flex-col gap-2">
                <Input
                  ui="sps"
                  type="text"
                  name="email"
                  label="Email"
                  placeholder="Type your email"
                />
                <Button
                  ui="shadcn"
                  variant="primary"
                  onClick={handleSubmit(updateByEmailSubmit)}
                >
                  Send unsubscribe link
                </Button>
              </div>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
