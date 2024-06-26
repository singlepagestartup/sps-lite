"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-website-builder/models/navbar-block/frontend/api/client";
import { useForm } from "react-hook-form";
import { Form, Card, CardContent } from "@sps/shared-ui-shadcn";
import { Button } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { invalidateServerTag } from "@sps/shared-frontend-client-store";
import { Component as NavbarBlockSpsLiteAdminFormInputs } from "@sps/sps-website-builder/models/navbar-block/frontend/component/variants/sps-lite/admin-form-inputs";
import { variants } from "@sps/sps-website-builder/models/navbar-block/contracts/root";

const formSchema = z.object({
  variant: z.enum(variants).default("default"),
  className: z.string().optional(),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
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
      className: props.data?.className || "",
      title: props.data?.title || "",
      subtitle: props.data?.subtitle || "",
      description: props.data?.description || "",
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
      dispatch(api.rtk.util.invalidateTags(["navbar-block"]));
      invalidateServerTag({ tag: "navbar-block" });

      if (props.setOpen) {
        props.setOpen(false);
      }

      router.refresh();
    }
  }, [updateEntityResult, createEntityResult]);

  return (
    <div
      data-module="sps-website-builder"
      data-model="navbar-block"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={props.className || ""}
    >
      <Form {...form}>
        <Card className="admin-edit-card">
          <h1 className="admin-edit-card-heading">
            {props.data?.id ? "Edit" : "Create"} navbar-block
          </h1>
          <CardContent className="flex flex-col gap-6 pb-10">
            <NavbarBlockSpsLiteAdminFormInputs
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
