"use client";

import { IComponentPropsExtended } from "./interface";
import { Card, CardContent } from "@sps/shared-ui-shadcn";
import { z } from "zod";
import { FormField, ModelEntityCard } from "@sps/ui-adapter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionTrigger } from "@sps/shared-frontend-hooks";
import { api } from "@sps/sps-website-builder/relations/navbar-blocks-to-buttons-arrays/frontend/api/client";
import { Component as AdminSelectInput } from "@sps/sps-website-builder/models/buttons-array/frontend/component/root";
import { variants } from "@sps/sps-website-builder/relations/navbar-blocks-to-buttons-arrays/contracts/root";

const formSchema = z.object({
  navbarBlockId: z.string().min(1),
  buttonsArrayId: z.string().min(1),
  variant: z.enum(variants).default("default"),
  position: z.enum(["default", "additional", "extra"]).default("default"),
  className: z.string().optional(),
  orderIndex: z.number().default(0),
});

export function Component(props: IComponentPropsExtended) {
  const [updateEntity, updateEntityResult] = api.rtk.useUpdateMutation();
  const [createEntity, createEntityResult] = api.rtk.useCreateMutation();
  const [deleteEntity, deleteEntityResult] = api.rtk.useDeleteMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      navbarBlockId: props.data?.navbarBlockId || props.navbarBlockId,
      buttonsArrayId: props.data?.buttonsArrayId,
      variant: props.data?.variant || "default",
      position: props.data?.position || "default",
      className: props.data?.className || "",
      orderIndex: props.data?.orderIndex || 0,
    },
  });

  const watchData = form.watch();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!data.navbarBlockId || !data.buttonsArrayId) {
      return;
    }

    if (props.data?.id) {
      await updateEntity({
        id: props.data.id,
        data,
      });

      return;
    }

    await createEntity({
      data,
    });
  }

  useActionTrigger({
    storeName: "sps-website-builder/navbar-block",
    actionFilter: (action) => {
      return action.type === "navbar-block/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      if (action.payload.id) {
        form.setValue("navbarBlockId", action.payload.id);
      }

      form.handleSubmit(onSubmit)();
    },
  });

  return (
    <div
      data-module="sps-website-builder"
      data-relation="navbar-blocks-to-buttons-arrays"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className="w-full"
    >
      {props.data ? (
        <ModelEntityCard
          onDeleteEntity={() => {
            if (props.data?.id) {
              deleteEntity({ id: props.data.id });
            }
          }}
          data={props.data}
        >
          <div className="flex flex-col col-span-3 gap-0.5">
            <FormField
              ui="shadcn"
              type="select"
              label="Variant"
              name="variant"
              form={form}
              placeholder="Select variant of relation"
              options={variants.map((variant) => [variant, variant])}
            />
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
              type="select"
              label="Position"
              name="position"
              form={form}
              placeholder="Select position of relation"
              options={[
                ["default", "Default"],
                ["additional", "Additional"],
                ["extra", "Extra"],
              ]}
            />
            <FormField
              ui="shadcn"
              type="text"
              label="Class name"
              name="className"
              form={form}
              placeholder="Enter class name"
            />
            <AdminSelectInput
              isServer={false}
              hostUrl={props.hostUrl}
              form={form}
              variant="admin-select-input"
              formFieldName="buttonsArrayId"
            />
          </div>
        </ModelEntityCard>
      ) : (
        <Card className="overflow-hidden">
          <h3 className="admin-heading-h3 -mt-1 lg:-mt-2 -ml-0.5 lg:-ml-1 pb-4">
            Select entity from buttons-arrays
          </h3>
          <CardContent className="flex flex-col gap-6">
            <FormField
              ui="shadcn"
              type="select"
              label="Variant"
              name="variant"
              form={form}
              placeholder="Select variant of relation"
              options={variants.map((variant) => [variant, variant])}
            />
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
              type="select"
              label="Position"
              name="position"
              form={form}
              placeholder="Select position of relation"
              options={[
                ["default", "Default"],
                ["additional", "Additional"],
                ["extra", "Extra"],
              ]}
            />
            <FormField
              ui="shadcn"
              type="text"
              label="Class name"
              name="className"
              form={form}
              placeholder="Enter class name"
            />
            <AdminSelectInput
              isServer={false}
              hostUrl={props.hostUrl}
              form={form}
              variant="admin-select-input"
              formFieldName="buttonsArrayId"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
