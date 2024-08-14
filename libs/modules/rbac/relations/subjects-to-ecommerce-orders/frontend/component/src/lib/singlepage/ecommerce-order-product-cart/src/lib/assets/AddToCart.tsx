"use client";

import { IComponentPropsExtended } from "../interface";
import { api as orderApi } from "@sps/ecommerce/models/order/sdk/server";
import { api as ordersToProductsApi } from "@sps/ecommerce/relations/orders-to-products/sdk/server";
import { z } from "zod";
import { Button, Form } from "@sps/shared-ui-shadcn";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@sps/rbac/relations/subjects-to-ecommerce-orders/sdk/client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  productId: z.string().optional(),
  orderId: z.string().optional(),
});

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();
  const createEntity = api.create();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const order = await orderApi.create({
      data: {},
    });

    await ordersToProductsApi.create({
      data: {
        productId: props.product.id,
        orderId: order.id,
      },
    });

    createEntity.mutate({
      data: {
        subjectId: props.subject.id,
        ecommerceOrderId: order.id,
      },
    });
  }

  // useEffect(() => {
  //   if (createEntity.isSuccess) {
  //     router.refresh();
  //   }
  // }, [createEntity.isSuccess]);

  return (
    <Form {...form}>
      <Button onClick={form.handleSubmit(onSubmit)} variant="primary">
        Add to cart
      </Button>
    </Form>
  );
}
