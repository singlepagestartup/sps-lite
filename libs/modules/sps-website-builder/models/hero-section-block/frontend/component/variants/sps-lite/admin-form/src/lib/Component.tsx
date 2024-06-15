"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-website-builder-models-hero-section-block-frontend-api-client";
import { useForm } from "react-hook-form";
import { Form, Card, CardContent } from "@sps/shadcn";
import { Button } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { invalidateServerTag } from "@sps/store";
import { Component as AdminFormInputs } from "@sps/sps-website-builder-models-hero-section-block-frontend-component-variants-sps-lite-admin-form-inputs";
import { variants } from "@sps/sps-website-builder-models-hero-section-block-contracts";

const formSchema = z.object({
  variant: z.enum(variants),
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  className: z.string().optional(),
  anchor: z.string().optional(),
});

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [updateEntity, updateEntityResult] = api.rtk.useUpdateMutation();
  const [createEntity, createEntityResult] = api.rtk.useCreateMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: props.data?.title || "",
      subtitle: props.data?.subtitle || "",
      variant: props.data?.variant || "default",
      description: props.data?.description || "",
      className: props.data?.className || "",
      anchor: props.data?.anchor || "",
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
      dispatch(api.rtk.util.invalidateTags(["hero-section-block"]));
      invalidateServerTag({ tag: "hero-section-block" });

      if (props.setOpen) {
        props.setOpen(false);
      }

      router.refresh();
    }
  }, [updateEntityResult, createEntityResult]);

  return (
    <div
      data-module="sps-website-builder"
      data-model="hero-section-block"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={props.className || ""}
    >
      <Form {...form}>
        <Card className="admin-edit-card">
          <h1 className="admin-edit-card-heading">
            {props.data?.id ? "Edit" : "Create"} hero-section-block
          </h1>
          <CardContent className="flex flex-col gap-6 pb-10">
            <AdminFormInputs
              isServer={false}
              hostUrl={props.hostUrl}
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
