"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-host-models-page-frontend-api-client";
import { useForm } from "react-hook-form";
import { Form, Card, CardContent, CardFooter } from "@sps/shadcn";
import { Button } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { invalidateServerTag } from "@sps/store";
import { Component as AdminFormInputs } from "@sps/sps-host-models-page-frontend-component-variants-sps-lite-admin-form-inputs";
import { variants } from "@sps/sps-host-models-page-contracts";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  url: z.string().min(1),
  variant: z.enum(variants).default("default"),
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
      url: props.data?.url || "/",
      variant: props.data?.variant || "default",
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
      dispatch(api.rtk.util.invalidateTags(["page"]));
      invalidateServerTag({ tag: "page" });

      if (props.setOpen) {
        props.setOpen(false);
      }

      router.refresh();
    }
  }, [updateEntityResult, createEntityResult]);

  return (
    <div
      data-module="sps-host"
      data-model="page"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`w-full ${props.className || ""}`}
    >
      <Form {...form}>
        <CardContent>
          <AdminFormInputs
            isServer={false}
            hostUrl={props.hostUrl}
            variant="admin-form-inputs"
            data={props.data}
            form={form}
          />
        </CardContent>
        <CardFooter>
          <Button
            ui="shadcn"
            variant="primary"
            size="lg"
            onClick={form.handleSubmit(onSubmit)}
          >
            {props.data?.id ? "Update" : "Create"}
          </Button>
        </CardFooter>
      </Form>
    </div>
  );
}
