"use client";

import { IComponentPropsExtended } from "./interface";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { Component as Subject } from "@sps/rbac/models/subject/frontend/component";
import { Component as EcommerceOrdersToProducts } from "@sps/ecommerce/relations/orders-to-products/frontend/component";
import { Button, Form } from "@sps/shared-ui-shadcn";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  ordersToProducts: z.array(
    z.object({
      id: z.string(),
      quantity: z.number(),
    }),
  ),
});

export function Component(props: IComponentPropsExtended) {
  const updateEntity = api.ecommerceModuleOrderUpdate({});

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ordersToProducts: [],
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    updateEntity.mutate({
      id: props.data.id,
      orderId: props.order.id,
      data,
    });
  }

  useEffect(() => {
    if (updateEntity.isSuccess) {
      toast.success("Updated successfully");
    }
  }, [updateEntity.isSuccess]);

  return (
    <Form {...form}>
      <div className="flex flex-row gap-1">
        <Subject
          isServer={false}
          variant="ecommerce-module-order-list-default"
          data={props.data}
          language={props.language}
          apiProps={{ params: { includeCartDetails: true } }}
        >
          {({ data: orders }) => {
            const data = orders.find((order) => order.id === props.order.id)
              ?.cartDetails?.lines;

            return data?.map((entity, index) => {
              return (
                <div key={entity.id} className="flex w-full gap-1">
                  <EcommerceOrdersToProducts
                    isServer={false}
                    variant="form-field-default"
                    field="id"
                    dataSource="props"
                    data={entity}
                    form={form}
                    name={`ordersToProducts.${index}.id`}
                    className="hidden"
                  />
                  <EcommerceOrdersToProducts
                    isServer={false}
                    variant="form-field-default"
                    field="quantity"
                    dataSource="props"
                    data={entity}
                    form={form}
                    type="number"
                    name={`ordersToProducts.${index}.quantity`}
                  />
                </div>
              );
            });
          }}
        </Subject>
        <Button
          onClick={form.handleSubmit(onSubmit)}
          variant="secondary"
          className="w-fit flex shrink-0"
          disabled={updateEntity.isPending}
        >
          Update
        </Button>
      </div>
    </Form>
  );
}
