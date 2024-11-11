"use client";

import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { Button, Form } from "@sps/shared-ui-shadcn";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { FormField } from "@sps/ui-adapter";

const formSchema = z.object({
  provider: z
    .string()
    .refine(
      (value) =>
        value === "stripe" ||
        value === "0xprocessing" ||
        value === "payselection" ||
        value === "cloudpayments" ||
        value === "dummy",
      "Invalid provider",
    ),
  email: z.string().email(),
  quantity: z.number().int().positive(),
  comment: z.string().optional(),
});

export function Component(props: IComponentPropsExtended) {
  const oneStepCheckout = api.ecommerceProductOneStepCheckout({
    id: props.data.id,
    productId: props.product.id,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      provider: "dummy",
      email: "",
      quantity: 1,
      comment: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    oneStepCheckout.mutate({
      data,
    });
  }

  useEffect(() => {
    if (oneStepCheckout.isSuccess) {
      const paymentUrl =
        oneStepCheckout.data.subjectsToEcommerceModuleOrders[0].order
          .ordersToBillingModulePaymentIntents[0].billingModulePaymentIntent
          .invoices[0].paymentUrl;
      window.location.href = paymentUrl;
    }
  }, [oneStepCheckout.isSuccess]);

  return (
    <div
      data-module="rbac"
      data-model="subject"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex flex-col", props.className)}
    >
      <Form {...form}>
        <div className="flex flex-col gap-3">
          <FormField
            ui="shadcn"
            type="text"
            label="Email"
            name="email"
            form={form}
            placeholder="Type your email"
            className="w-full"
          />
          <FormField
            ui="shadcn"
            type="text"
            label="Comment"
            name="comment"
            form={form}
            placeholder="Type comment"
            className="w-full"
          />

          <Button onClick={form.handleSubmit(onSubmit)} variant="primary">
            One step checkout
          </Button>
        </div>
      </Form>
    </div>
  );
}
