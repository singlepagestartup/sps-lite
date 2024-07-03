"use client";

import { IComponentPropsExtended } from "./interface";
import { Card, CardContent } from "@sps/shared-ui-shadcn";
import { z } from "zod";
import { FormField, ModelEntityCard } from "@sps/ui-adapter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionTrigger } from "@sps/shared-frontend-hooks";
import { api } from "@sps/sps-website-builder/relations/footer-blocks-to-logotypes/frontend/api/client";
import { Component as AdminSelectInput } from "@sps/sps-website-builder/models/logotype/frontend/component/variants/sps-lite/admin-select-input";
import { variants } from "@sps/sps-website-builder/relations/footer-blocks-to-logotypes/contracts/root";

const formSchema = z.object({
  footerBlockId: z.string().min(1),
  logotypeId: z.string().min(1),
  variant: z.enum(variants).default("default"),
  orderIndex: z.number().default(0),
  className: z.string().optional(),
});

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();
  const createEntity = api.create();
  const deleteEntity = api.delete();

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      footerBlockId: props.data?.footerBlockId || props.footerBlockId,
      logotypeId: props.data?.logotypeId,
      variant: props.data?.variant || "default",
      orderIndex: props.data?.orderIndex || 0,
      className: props.data?.className || "",
    },
  });

  const watchData = form.watch();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!data.footerBlockId || !data.logotypeId) {
      return;
    }

    if (props.data?.id) {
      updateEntity.mutate({
        id: props.data.id,
        data,
      });

      return;
    }

    createEntity.mutate({
      data,
    });
  }

  useActionTrigger({
    storeName: "sps-website-builder/footer-block",
    actionFilter: (action) => {
      return action.type === "footer-block/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      if (action.payload.id) {
        form.setValue("footerBlockId", action.payload.id);
      }

      form.handleSubmit(onSubmit)();
    },
  });

  return (
    <div
      data-module="sps-website-builder"
      data-relation="footer-blocks-to-logotypes"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className="w-full"
    >
      {props.data ? (
        <ModelEntityCard
          onDeleteEntity={() => {
            if (props.data?.id) {
              deleteEntity.mutate({ id: props.data.id });
            }
          }}
          data={props.data}
        >
          <div className="flex flex-col col-span-3 gap-0.5">
            <FormField
              ui="shadcn"
              type="number"
              label="Order index"
              name="orderIndex"
              form={form}
              placeholder="Enter order index"
            />
            <FormField
              ui="shadcn"
              type="text"
              label="Class name"
              name="className"
              form={form}
              placeholder="Type class name"
            />
            <FormField
              ui="shadcn"
              type="select"
              label="Variant"
              name="variant"
              form={form}
              placeholder="Select variant of relation"
              options={variants.map((variant) => [variant, variant])}
            />
            <AdminSelectInput
              isServer={false}
              hostUrl={props.hostUrl}
              form={form}
              variant="admin-select-input"
              formFieldName="logotypeId"
            />
          </div>
        </ModelEntityCard>
      ) : (
        <Card className="overflow-hidden">
          <h3 className="admin-heading-h3 -mt-1 lg:-mt-2 -ml-0.5 lg:-ml-1 pb-4">
            Select entity from logotype
          </h3>
          <CardContent className="flex flex-col gap-6">
            <FormField
              ui="shadcn"
              type="number"
              label="Order index"
              name="orderIndex"
              form={form}
              placeholder="Enter order index"
            />
            <FormField
              ui="shadcn"
              type="text"
              label="Class name"
              name="className"
              form={form}
              placeholder="Type class name"
            />
            <FormField
              ui="shadcn"
              type="select"
              label="Variant"
              name="variant"
              form={form}
              placeholder="Select variant of relation"
              options={variants.map((variant) => [variant, variant])}
            />
            <AdminSelectInput
              isServer={false}
              hostUrl={props.hostUrl}
              form={form}
              variant="admin-select-input"
              formFieldName="logotypeId"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
