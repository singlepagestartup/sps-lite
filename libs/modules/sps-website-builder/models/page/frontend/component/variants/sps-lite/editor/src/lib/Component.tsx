"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { FormProvider, useForm } from "react-hook-form";
import { Button, FormField } from "@sps/ui-adapter";
import { api } from "@sps/sps-website-builder-models-page-frontend-api-client";
import { useRouter } from "next/navigation";
import { Component as Layout } from "@sps/sps-website-builder-models-layout-frontend-component";

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();

  const [updatePage, updatePageResult] = api.rtk.useUpdatePageMutation();

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

    await updatePage({ id: props.data?.id, data });
  }

  useEffect(() => {
    if (updatePageResult.data) {
      router.refresh();
    }
  }, [updatePageResult]);

  return (
    <div
      data-module="sps-website-builder"
      data-model="page"
      data-variant={props.variant}
      className="w-full p-3 bg-gray-100 border-gray-500 rounded-lg"
    >
      <div className="flex flex-col gap-4">
        <p className="text-xl">Edit page</p>
        <FormProvider {...methods}>
          <FormField
            ui="sps"
            type="text"
            name="title"
            initialValue={props.data.title}
            placeholder="Page title"
            label="Title"
          />
          <div className="p-4 border border-gray-600 rounded-lg flex flex-col gap-6">
            <Layout isServer={false} variant="find">
              {({ data: layouts }) => {
                return (
                  <div className="flex flex-col gap-2 p-4 border border-gray-700 rounded-lg">
                    <p className="text-xl">Attach layout to page</p>
                    {layouts.map((layout, index) => {
                      return (
                        <Layout
                          key={index}
                          isServer={false}
                          data={layout}
                          variant="page-attacher"
                          page={props.data}
                        />
                      );
                    })}
                  </div>
                );
              }}
            </Layout>
            <Layout isServer={false} variant="editor" />
          </div>
          <Button
            ui="sps"
            data-ui-variant="primary"
            className="w-full"
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </Button>
        </FormProvider>
      </div>
    </div>
  );
}
