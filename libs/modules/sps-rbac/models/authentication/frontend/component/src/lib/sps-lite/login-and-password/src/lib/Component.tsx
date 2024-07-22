"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-rbac/models/authentication/sdk/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  Card,
  CardContent,
  Button,
  CardFooter,
  CardHeader,
} from "@sps/shared-ui-shadcn";
import { FormField } from "@sps/ui-adapter";

const formSchema = z.object({
  login: z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  password: z.string().min(8),
});

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();
  const loginAndPassword = api.loginAndPassword();

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
    console.log(`🚀 ~ useEffect ~ loginAndPassword:`, loginAndPassword);

    if (loginAndPassword.isSuccess) {
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
        <Card className="flex flex-col gap-6">
          <CardHeader>
            <h1 className="text-4xl font-bold">
              Login with login and password
            </h1>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 pb-10">
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
          </CardContent>
          <CardFooter>
            <Button variant="primary" onClick={form.handleSubmit(onSubmit)}>
              Login
            </Button>
          </CardFooter>
        </Card>
      </Form>
    </div>
  );
}
