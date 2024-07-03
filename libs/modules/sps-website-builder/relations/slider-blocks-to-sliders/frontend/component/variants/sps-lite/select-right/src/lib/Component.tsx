"use client";

import { IComponentPropsExtended } from "./interface";
import { Card, CardContent } from "@sps/shared-ui-shadcn";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionTrigger } from "@sps/shared-frontend-hooks";
import { api } from "@sps/sps-website-builder/relations/slider-blocks-to-sliders/frontend/api/client";
import { Component as AdminSelectInput } from "@sps/sps-website-builder/models/slider/frontend/component/variants/sps-lite/admin-select-input";
import { FormField, ModelEntityCard } from "@sps/ui-adapter";

const formSchema = z.object({
  sliderBlockId: z.string().min(1),
  sliderId: z.string().min(1),
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
      sliderBlockId: props.data?.sliderBlockId || props.sliderBlockId,
      sliderId: props.data?.sliderId,
      className: props.data?.className,
    },
  });

  const watchData = form.watch();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!data.sliderBlockId || !data.sliderId) {
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
    storeName: "sps-website-builder/slider-block",
    actionFilter: (action) => {
      return action.type === "slider-block/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      if (action.payload.id) {
        form.setValue("sliderBlockId", action.payload.id);
      }

      form.handleSubmit(onSubmit)();
    },
  });

  return (
    <div
      data-module="sps-website-builder"
      data-relation="slider-blocks-to-sliders"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className=""
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
              type="text"
              label="Class name"
              name="className"
              form={form}
              placeholder="Type class name"
            />
            <AdminSelectInput
              isServer={false}
              hostUrl={props.hostUrl}
              form={form}
              variant="admin-select-input"
              formFieldName="sliderId"
              renderField="title"
            />
          </div>
        </ModelEntityCard>
      ) : (
        <Card className="overflow-hidden">
          <h3 className="admin-heading-h3 -mt-1 lg:-mt-2 -ml-0.5 lg:-ml-1 pb-4">
            Select entity from sliders
          </h3>
          <CardContent>
            <FormField
              ui="shadcn"
              type="text"
              label="Class name"
              name="className"
              form={form}
              placeholder="Type class name"
            />
            <AdminSelectInput
              isServer={false}
              hostUrl={props.hostUrl}
              form={form}
              variant="admin-select-input"
              formFieldName="sliderId"
              renderField="title"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
