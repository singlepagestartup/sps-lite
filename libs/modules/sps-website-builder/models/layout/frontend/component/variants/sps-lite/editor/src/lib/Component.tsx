"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { FormProvider, useForm } from "react-hook-form";
import { api } from "@sps/sps-website-builder-models-layout-frontend-api-client";
import { useRouter } from "next/navigation";
import { Button, FormField } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();
  const methods = useForm<any>({
    mode: "all",
  });
  const [createLayout, createLayoutData] = api.rtk.useCreateMutation();

  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  const watchData = watch();

  async function onSubmit(data: any) {
    // data.tier = { id };
    console.log("🚀 ~ onSubmit ~ data:", data);

    await createLayout({ data });
  }

  useEffect(() => {
    if (createLayoutData.data) {
      router.refresh();
    }
  }, [createLayoutData]);

  return (
    <div
      data-module="sps-website-builder"
      data-model="layout"
      data-variant={props.variant}
      className="flex flex-col gap-6"
    >
      <p className="text-xl">Create layout</p>
      <FormProvider {...methods}>
        <FormField
          ui="sps"
          type="text"
          name="title"
          placeholder="Layout title"
          label="Title"
        />
        <Button
          ui="sps"
          data-ui-variant="primary"
          className="w-full"
          onClick={handleSubmit(onSubmit)}
        >
          Create
        </Button>
      </FormProvider>
    </div>
  );
}
