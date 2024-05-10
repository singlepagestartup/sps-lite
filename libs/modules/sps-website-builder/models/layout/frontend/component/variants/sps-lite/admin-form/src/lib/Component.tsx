"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-website-builder-models-layout-frontend-api-client";
import { FormProvider, useForm } from "react-hook-form";
import { FormField } from "@sps/ui-adapter";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@sps/shadcn";

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();

  const [updatePage, updatePageResult] = api.rtk.useUpdateMutation();
  const [createPage, createPageResult] = api.rtk.useCreateMutation();

  const methods = useForm<any>({
    mode: "all",
  });

  const {
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = methods;

  const watchData = watch();

  async function onSubmit(data: any) {
    // data.tier = { id };
    if (props.data?.id) {
      console.log("🚀 ~ onSubmit ~ data:", data);

      await updatePage({ id: props.data?.id, data });

      return;
    }

    await createPage({ data });
  }

  useEffect(() => {
    if (updatePageResult.data || createPageResult.data) {
      router.refresh();
    }
  }, [updatePageResult, createPageResult]);

  return (
    <div
      data-module="sps-website-builder"
      data-model="layout"
      data-variant={props.variant}
      className={props.className || ""}
    >
      <Card>
        <CardHeader>
          <CardTitle>{props.data?.id ? "Edit" : "Create"} Layout</CardTitle>
        </CardHeader>
        <CardContent>
          <FormProvider {...methods}>
            <div className="flex flex-col gap-3">
              <FormField
                ui="sps"
                type="text"
                name="title"
                initialValue={props.data?.title || ""}
                placeholder="Layout title"
                label="Title"
              />
              <div>
                <Label>Variant</Label>
                <Select
                  onValueChange={(value) => {
                    setValue("variant", value);
                  }}
                  defaultValue={props.data?.variant || ""}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select variant" />
                  </SelectTrigger>
                  <SelectContent>
                    {["wide", "boxed", "default"].map((variant, index) => {
                      return (
                        <SelectItem key={index} value={variant}>
                          {variant}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleSubmit(onSubmit)}>
                {props.data?.id ? "Save" : "Create"}
              </Button>
            </div>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  );
}
