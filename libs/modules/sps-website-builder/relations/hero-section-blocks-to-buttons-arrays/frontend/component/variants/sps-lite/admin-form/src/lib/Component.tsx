"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { route } from "@sps/sps-website-builder/relations/hero-section-blocks-to-buttons-arrays/frontend/api/model";
import {
  api,
  queryClient,
} from "@sps/sps-website-builder/relations/hero-section-blocks-to-buttons-arrays/frontend/api/client";
import { useForm } from "react-hook-form";
import { Form, CardContent, CardFooter } from "@sps/shared-ui-shadcn";
import { Button, FormField } from "@sps/ui-adapter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { variants } from "@sps/sps-website-builder/relations/hero-section-blocks-to-buttons-arrays/contracts/root";

const formSchema = z.object({
  variant: z.enum(variants),
});

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      variant: props.data?.variant || "default",
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
      data-relation="hero-section-blocks-to-buttons-arrays"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={`w-full ${props.className || ""}`}
    >
      <Form {...form}>
        <CardContent>
          <FormField
            ui="shadcn"
            type="select"
            label="Variant"
            name="variant"
            form={form}
            placeholder="Select variant"
            options={variants.map((variant) => [variant, variant])}
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
