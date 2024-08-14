"use client";

import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { z } from "zod";
import { Button, Form } from "@sps/shared-ui-shadcn";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@sps/ecommerce/models/order/sdk/client";
import { useEffect } from "react";
import { toast } from "sonner";

const formSchema = z.object({});

export function Component(props: IComponentPropsExtended) {
  const checkoutEntity = api.checkout({
    id: props.data.id,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    checkoutEntity.mutate({
      data: {},
    });
  }

  useEffect(() => {
    if (checkoutEntity.isSuccess) {
      toast.success("Order has been checked out");
    }
  }, [checkoutEntity.isSuccess]);

  return (
    <div
      data-module="ecommerce"
      data-model="order"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.className)}
    >
      <Form {...form}>
        <Button onClick={form.handleSubmit(onSubmit)} variant="primary">
          Checkout
        </Button>
      </Form>
    </div>
  );
}
