import React, { ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";
import {
  Form,
  Card,
  CardContent,
  Button,
  CardFooter,
  CardHeader,
} from "@sps/shared-ui-shadcn";

export interface IComponentProps {
  className?: string;
  variant: string;
  id?: string;
  module: string;
  form: UseFormReturn<any>;
  name: string;
  children: ReactNode;
  onSubmit: (data: any) => void;
  type?: "model" | "relation";
}

export function Component(props: IComponentProps) {
  return (
    <div
      data-module={props.module}
      data-id={props.id || ""}
      data-variant={props.variant}
      className={props.className || ""}
      {...(props.type === "relation"
        ? {
            "data-relation": props.name,
          }
        : {
            "data-model": props.name,
          })}
    >
      <Form {...props.form}>
        <Card>
          <CardHeader className="text-lg font-semibold">
            {props?.id ? "Update" : "Create"} {props.name}
          </CardHeader>
          <CardContent className="flex flex-col gap-6 pb-10">
            {props.children}
          </CardContent>
          <CardFooter>
            <Button
              variant="primary"
              onClick={props.form.handleSubmit(props.onSubmit)}
            >
              {props?.id ? "Update" : "Create"}
            </Button>
          </CardFooter>
        </Card>
      </Form>
    </div>
  );
}
