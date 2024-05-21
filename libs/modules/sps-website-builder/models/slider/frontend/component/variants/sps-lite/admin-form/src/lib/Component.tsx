"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-website-builder-models-slider-frontend-api-client";
import { useForm } from "react-hook-form";
import {
  Form,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@sps/shadcn";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { invalidateServerTag } from "@sps/store";
import { Component as AdminFormInputs } from "@sps/sps-website-builder-models-slider-frontend-component-variants-sps-lite-admin-form-inputs";
import { variants } from "@sps/sps-website-builder-models-slider-contracts";

const formSchema = z.object({
  variant: z.enum(variants),
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
      dispatch(api.rtk.util.invalidateTags(["slider"]));
      invalidateServerTag({ tag: "slider" });

      if (props.setOpen) {
        props.setOpen(false);
      }

      router.refresh();
    }
  }, [updateEntityResult, createEntityResult]);

  return (
    <div
      data-module="sps-website-builder"
      data-model="slider"
      data-variant={props.variant}
      className={props.className || ""}
    >
      <Form {...form}>
        <Card>
          <CardHeader>
            <CardTitle>{props.data?.id ? "Edit" : "Create"} slider</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <AdminFormInputs
              isServer={false}
              variant="admin-form-inputs"
              data={props.data}
              form={form}
            />
          </CardContent>
          <CardFooter>
            <Button variant="primary" onClick={form.handleSubmit(onSubmit)}>
              {props.data?.id ? "Update" : "Create"}
            </Button>
          </CardFooter>
        </Card>
      </Form>
    </div>
  );
}
