"use client";

import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { z } from "zod";
import { Button, Form } from "@sps/shared-ui-shadcn";
import { FormField } from "@sps/ui-adapter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@sps/ecommerce/models/order/sdk/client";
import { useEffect } from "react";
import { toast } from "sonner";

const providers = ["stripe", "0xprocessing", "payselection"] as const;

const formSchema = z.object({
  provider: z
    .string()
    .refine(
      (value) =>
        value === "stripe" ||
        value === "0xprocessing" ||
        value === "payselection",
      "Invalid provider",
    ),
});

export function Component(props: IComponentPropsExtended) {
  const checkoutEntity = api.checkout({
    id: props.data.id,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      provider: "stripe",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    checkoutEntity.mutate({
      data,
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
        <div className="flex flex-col gap-3">
          <FormField
            ui="shadcn"
            type="select"
            label="Provider"
            name="provider"
            form={form}
            placeholder="Select provider"
            options={providers.map((provider) => [provider, provider])}
          />
          <Button onClick={form.handleSubmit(onSubmit)} variant="primary">
            Checkout
          </Button>
        </div>
      </Form>
    </div>
  );
}
