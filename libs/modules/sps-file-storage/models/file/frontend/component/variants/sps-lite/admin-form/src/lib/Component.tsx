"use client";

import React, { use, useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-file-storage-models-file-frontend-api-client";
import { useForm } from "react-hook-form";
import {
  Form,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@sps/shadcn";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { invalidateServerTag } from "@sps/store";
import { Component as AdminFormInputs } from "@sps/sps-file-storage-models-file-frontend-component-variants-sps-lite-admin-form-inputs";
import { variants } from "@sps/sps-file-storage-models-file-contracts";

const formSchema = z.object({
  variant: z.enum(variants),
  url: z.string().min(1),
  // file: z.custom<File>((v) => v instanceof File),
  // files: { file: z.string() },
});

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [updateEntity, updateEntityResult] = api.rtk.useUpdateMutation();
  const [createEntity, createEntityResult] = api.rtk.useCreateMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
      url: props.data?.url || "",
      // files: {
      //   file: props.data?.file || "",
      // },
    },
  });

  const watchData = form.watch();

  useEffect(() => {
    console.log(`🚀 ~ useEffect ~ watchData:`, watchData);
  }, [watchData]);

  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(`🚀 ~ onSubmit ~ data:`, data);

    if (props.data?.id) {
      await updateEntity({ id: props.data?.id, data });
      return;
    }

    await createEntity({
      data,
    });
  }

  useEffect(() => {
    if (updateEntityResult.data || createEntityResult.data) {
      dispatch(api.rtk.util.invalidateTags(["file"]));
      invalidateServerTag({ tag: "file" });

      if (props.setOpen) {
        props.setOpen(false);
      }

      router.refresh();
    }
  }, [updateEntityResult, createEntityResult]);

  return (
    <div
      data-module="sps-file-storage"
      data-model="file"
      data-variant={props.variant}
      className={props.className || ""}
    >
      <Form {...form}>
        <Card>
          <CardHeader>
            <CardTitle>{props.data?.id ? "Edit" : "Create"} file</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <AdminFormInputs
              isServer={false}
              variant="admin-form-inputs"
              data={props.data}
              form={form}
            />
            <Button variant="primary" onClick={form.handleSubmit(onSubmit)}>
              {props.data?.id ? "Update" : "Create"}
            </Button>
          </CardContent>
        </Card>
      </Form>
    </div>
  );
}
