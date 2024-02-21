"use client";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
// import { api as subscriptionApi } from "../../../../subscription/api/client";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@sps/ui-adapter";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  // const [updateByEmail, { data: updateByEmailData }] =
  //   subscriptionApi.useUpdateByEmailMutation();

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

  // async function updateByEmailSubmit(data: any) {
  //   console.log("🚀 ~ onSubmit ~ data:", data);
  //   data.status = "canceled";

  //   await updateByEmail({ data });
  // }

  return (
    <div
      data-model="page-blocks.edit-subscription-block"
      data-variant={props.variant}
      className=""
    >
      <div className="relative overflow-hidden pt-32 pb-96 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            {props.data.subtitle ? (
              <h2 className="text-lg font-semibold leading-8 text-indigo-400">
                <ReactMarkdown>{props.data.subtitle}</ReactMarkdown>
              </h2>
            ) : null}
            {props.data.title ? (
              <ReactMarkdown className="mt-2 text-4xl font-bold tracking-tight">
                {props.data.title}
              </ReactMarkdown>
            ) : null}
            {props.data.description ? (
              <ReactMarkdown className="mt-6 text-lg leading-8">
                {props.data.description}
              </ReactMarkdown>
            ) : null}
          </div>
        </div>
      </div>
      {/* <div className="flow-root bg-white pb-32 lg:pb-40">
        <div className="relative -mt-80">
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <FormProvider {...methods}>
              <div className="flex flex-col gap-2">
                <TextInput
                  variant="text"
                  name="email"
                  label="Email"
                  placeholder="Type your email"
                />
                <Button
                  ui="shadcn"
                  variant="primary"
                  title="Delete subscription"
                  onClick={handleSubmit(updateByEmailSubmit)}
                />
              </div>
            </FormProvider>
          </div>
        </div>
      </div> */}
    </div>
  );
}
