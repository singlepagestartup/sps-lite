"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-website-builder-models-metadata-frontend-api-client";
import { useForm } from "react-hook-form";
import { Form, Card, CardContent } from "@sps/shadcn";
import { Button } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { invalidateServerTag } from "@sps/store";
import { Component as AdminFormInputs } from "@sps/sps-website-builder-models-metadata-frontend-component-variants-sps-lite-admin-form-inputs";
import { variants } from "@sps/sps-website-builder-models-metadata-contracts";

const formSchema = z.object({
  variant: z.enum(variants),
  title: z.string().optional(),
  description: z.string().optional(),
  keywords: z.string().optional(),
  author: z.string().optional(),
  viewport: z.string().optional(),
  opengraphTitle: z.string().optional(),
  opengraphDescription: z.string().optional(),
  opengraphUrl: z.string().optional(),
  opengraphType: z.string().optional(),
  opengraphSiteName: z.string().optional(),
  opengraphLocale: z.string().optional(),
  twitterCard: z.string().optional(),
  twitterSite: z.string().optional(),
  twitterCreator: z.string().optional(),
  twitterTitle: z.string().optional(),
  twitterDescription: z.string().optional(),
  twitterUrl: z.string().optional(),
  twitterDomain: z.string().optional(),
  twitterAppCountry: z.string().optional(),
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
      title: props.data?.title || "",
      description: props.data?.description || "",
      keywords: props.data?.keywords || "",
      author: props.data?.author || "",
      viewport: props.data?.viewport || "",
      opengraphTitle: props.data?.opengraphTitle || "",
      opengraphDescription: props.data?.opengraphDescription || "",
      opengraphUrl: props.data?.opengraphUrl || "",
      opengraphType: props.data?.opengraphType || "",
      opengraphSiteName: props.data?.opengraphSiteName || "",
      opengraphLocale: props.data?.opengraphLocale || "",
      twitterCard: props.data?.twitterCard || "",
      twitterSite: props.data?.twitterSite || "",
      twitterCreator: props.data?.twitterCreator || "",
      twitterTitle: props.data?.twitterTitle || "",
      twitterDescription: props.data?.twitterDescription || "",
      twitterUrl: props.data?.twitterUrl || "",
      twitterDomain: props.data?.twitterDomain || "",
      twitterAppCountry: props.data?.twitterAppCountry || "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
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
      dispatch(api.rtk.util.invalidateTags(["metadata"]));
      invalidateServerTag({ tag: "metadata" });

      if (props.setOpen) {
        props.setOpen(false);
      }

      router.refresh();
    }
  }, [updateEntityResult, createEntityResult]);

  return (
    <div
      data-module="sps-website-builder"
      data-model="metadata"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`w-full ${props.className || ""}`}
    >
      <Form {...form}>
        <Card className="admin-edit-card">
          <h1 className="admin-edit-card-heading">
            {props.data?.id ? "Edit" : "Create"} metadata
          </h1>
          <CardContent className="flex flex-col gap-6 pb-10">
            <AdminFormInputs
              isServer={false}
              variant="admin-form-inputs"
              data={props.data}
              form={form}
            />
          </CardContent>
          <div className="admin-edit-card-button-container">
            <Button ui="sps-admin" onClick={form.handleSubmit(onSubmit)}>
              {props.data?.id ? "Update" : "Create"}
            </Button>
          </div>
        </Card>
      </Form>
    </div>
  );
}
