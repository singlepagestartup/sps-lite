"use client";

import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { insertSchema } from "@sps/ecommerce/relations/orders-to-products/sdk/model";
import { api } from "@sps/ecommerce/relations/orders-to-products/sdk/client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form } from "@sps/shared-ui-shadcn";
import { FormField } from "@sps/ui-adapter";
import { useEffect } from "react";
import { toast } from "sonner";

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.update();

  const form = useForm<z.infer<typeof insertSchema>>({
    resolver: zodResolver(insertSchema),
    defaultValues: {
      ...props.data,
      quantity: props.data?.quantity || 0,
    },
  });

  async function onSubmit(data: z.infer<typeof insertSchema>) {
    updateEntity.mutate({
      id: props.data.id,
      data,
    });
  }

  useEffect(() => {
    if (updateEntity.isSuccess) {
      toast.success("Updated successfully");
    }
  }, [updateEntity.isSuccess]);

  return (
    <div
      data-module="ecommerce"
      data-relation="orders-to-products"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <Form {...form}>
        <div className="flex w-full gap-1">
          <FormField
            ui="shadcn"
            type="number"
            name="quantity"
            form={form}
            placeholder="Type quantity"
            className="w-full"
          />

          <Button
            onClick={form.handleSubmit(onSubmit)}
            variant="secondary"
            className="w-fit flex flex-shrink-0"
          >
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
}
