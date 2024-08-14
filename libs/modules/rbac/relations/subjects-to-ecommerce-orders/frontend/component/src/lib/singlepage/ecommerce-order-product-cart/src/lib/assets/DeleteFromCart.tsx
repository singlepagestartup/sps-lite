"use client";

import { IModel } from "../interface";
import { api as orderApi } from "@sps/ecommerce/models/order/sdk/server";
import { IModel as ISubject } from "@sps/rbac/models/subject/sdk/model";
import { IModel as IProduct } from "@sps/ecommerce/models/product/sdk/model";
import { api as ordersToProductsApi } from "@sps/ecommerce/relations/orders-to-products/sdk/server";
import { z } from "zod";
import { Button, Form } from "@sps/shared-ui-shadcn";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@sps/rbac/relations/subjects-to-ecommerce-orders/sdk/client";
import { IModel as IOrderToProduct } from "@sps/ecommerce/relations/orders-to-products/sdk/model";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FormField } from "@sps/ui-adapter";

const formSchema = z.object({
  productId: z.string().optional(),
  orderId: z.string().optional(),
});

export function Component(props: {
  orderToProduct: IOrderToProduct;
  subject: ISubject;
  product: IProduct;
  data: IModel;
}) {
  const [isSubmitFinished, setIsSubmitFinished] = useState<boolean>(false);
  const router = useRouter();
  const deleteEntity = api.delete();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    deleteEntity.mutate({
      id: props.data.id,
    });

    await ordersToProductsApi.delete({
      id: props.orderToProduct.id,
    });

    await orderApi.delete({
      id: props.orderToProduct.orderId,
    });

    setIsSubmitFinished(true);
  }

  // useEffect(() => {
  //   if (deleteEntity.isSuccess && isSubmitFinished) {
  //     router.refresh();
  //   }
  // }, [deleteEntity.isSuccess, isSubmitFinished]);

  return (
    <Form {...form}>
      <Button onClick={form.handleSubmit(onSubmit)} variant="destructive">
        Remove from cart {props.data.id}
      </Button>
    </Form>
  );
}
