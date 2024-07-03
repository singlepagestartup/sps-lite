"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { route } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/frontend/api/model";
import {
  api,
  queryClient,
} from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/frontend/api/client";
import { useForm } from "react-hook-form";
import { Form, CardContent, CardFooter } from "@sps/shared-ui-shadcn";
import { Button, FormField, ModelEntitiesListCard } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { variants } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/contracts/root";
import { Component as ButtonsArraySelectInput } from "@sps/sps-website-builder/models/buttons-array/frontend/component/variants/sps-lite/admin-select-input";
import { Component as ButtonSelectInput } from "@sps/sps-website-builder/models/button/frontend/component/variants/sps-lite/admin-select-input";

const formSchema = z.object({
  variant: z.enum(variants),
  buttonsArrayId: z.string().optional(),
  buttonId: z.string().optional(),
});

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
      buttonsArrayId: props.data?.buttonsArrayId || "",
      buttonId: props.data?.buttonId || "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (props.data?.id) {
      updateEntity.mutate({ id: props.data?.id, data });
      return;
    }

    createEntity.mutate({
      data,
    });
  }

  useEffect(() => {
    if (updateEntity.data || createEntity.data) {
      const id = updateEntity.data?.id || createEntity.data?.id;

      queryClient.invalidateQueries({
        queryKey: [`${route}/${id}`],
      });
    }
  }, [updateEntity, createEntity]);

  return (
    <div
      data-module="sps-website-builder"
      data-relation="buttons-arrays-to-buttons"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`w-full ${props.className || ""}`}
    >
      <Form {...form}>
        <CardContent>
          <div className="flex flex-col gap-6">
            <FormField
              ui="shadcn"
              type="select"
              label="Variant"
              name="variant"
              form={form}
              placeholder="Select variant"
              options={variants.map((variant) => [variant, variant])}
            />
            <ModelEntitiesListCard title="buttons-array">
              <div className="flex flex-col gap-6">
                <ButtonsArraySelectInput
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant="admin-select-input"
                  formFieldName="buttonsArrayId"
                  form={form}
                />
              </div>
            </ModelEntitiesListCard>
            <ModelEntitiesListCard title="button">
              <div className="flex flex-col gap-6">
                <ButtonSelectInput
                  isServer={props.isServer}
                  hostUrl={props.hostUrl}
                  variant="admin-select-input"
                  formFieldName="buttonId"
                  form={form}
                />
              </div>
            </ModelEntitiesListCard>
          </div>
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
