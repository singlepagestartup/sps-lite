"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { FormProvider, useForm } from "react-hook-form";
import { Button, FormField } from "@sps/ui-adapter";
import { api } from "@sps/sps-website-builder-models-page-frontend-api-client";
import { useRouter } from "next/navigation";
import { Component as Layout } from "@sps/sps-website-builder-models-layout-frontend-component";
import { Card, CardContent, CardHeader, CardTitle } from "@sps/shadcn";

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();

  const [updatePage, updatePageResult] = api.rtk.useUpdateMutation();

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
      className="bg-gray-200"
    >
      <div className="max-w-7xl py-10 w-full mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Edit page</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <FormProvider {...methods}>
                <FormField
                  ui="sps"
                  type="text"
                  name="title"
                  initialValue={props.data.title}
                  placeholder="Page title"
                  label="Title"
                />

                <Card>
                  <CardHeader>
                    <CardTitle>Layout</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <Layout isServer={false} variant="find">
                      {({ data: layouts }) => {
                        if (!layouts) {
                          return null;
                        }

                        return (
                          <Card>
                            <CardHeader>
                              <CardTitle>Attach layout to page</CardTitle>
                            </CardHeader>
                            <CardContent>
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
                            </CardContent>
                          </Card>
                        );
                      }}
                    </Layout>
                    <Layout isServer={false} variant="editor" />
                  </CardContent>
                </Card>
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
