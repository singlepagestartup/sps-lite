"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-rbac/models/authentication/sdk/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, Button } from "@sps/shared-ui-shadcn";
import { FormField } from "@sps/ui-adapter";
import { toast } from "sonner";

const formSchema = z.object({
  login: z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  password: z.string().min(8),
});

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();
  const loginAndPassword = api.loginAndPassword({
    type: props.type,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    loginAndPassword.mutate({
      data,
    });

    // router.refresh();
  }

  useEffect(() => {
    if (loginAndPassword.isSuccess) {
      if (loginAndPassword.data?.jwt && loginAndPassword.data?.refresh) {
        localStorage.setItem(
          "sps-rbac.authentication.jwt",
          loginAndPassword.data.jwt,
        );
        localStorage.setItem(
          "sps-rbac.authentication.refresh",
          loginAndPassword.data.refresh,
        );
      }
      router.push("/");
    }
  }, [loginAndPassword]);

  return (
    <div
      data-module="sps-rbac"
      data-model="authentication"
      data-variant={props.variant}
      className="w-full"
    >
      <Form {...form}>
        <div className="w-full flex flex-col gap-6">
          <FormField
            ui="shadcn"
            type="text"
            label="login"
            name="login"
            form={form}
            placeholder="Enter your login"
          />
          <FormField
            ui="shadcn"
            type="password"
            label="Password"
            name="password"
            form={form}
            placeholder="Enter your password"
          />

          <Button variant="primary" onClick={form.handleSubmit(onSubmit)}>
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
}
