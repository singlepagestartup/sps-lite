"use client";

import { Form, Button } from "@sps/shared-ui-shadcn";
import { IComponentPropsExtended } from "./interface";
import { useRouter } from "next/navigation";
import { cn } from "@sps/shared-frontend-client-utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "@sps/ecommerce/relations/orders-to-products/sdk/client";
import { insertSchema } from "@sps/ecommerce/relations/orders-to-products/sdk/model";
import { zodResolver } from "@hookform/resolvers/zod";
import { api as orderApi } from "@sps/ecommerce/models/order/sdk/server";
import { useEffect } from "react";

const formSchema = z.object({
  productId: z.string(),
  orderId: z.string().optional(),
});

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productId: props.productId,
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const order = await orderApi.create({
      data: {},
    });

    createEntity.mutate({
      data: {
        ...data,
        orderId: order.id,
      },
    });
  }

  useEffect(() => {
    if (createEntity.isSuccess) {
      router.refresh();
    }
  }, [createEntity.isSuccess]);

  return (
    <div
      data-module="ecommerce"
      data-relation="orders-to-products"
      data-variant={props.variant}
      className={cn("w-full flex", props.className)}
    >
      <Form {...form}>
        <Button onClick={form.handleSubmit(onSubmit)} variant="primary">
          Add to cart
        </Button>
      </Form>
    </div>
  );
}
