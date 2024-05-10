"use client";

import React, { useEffect } from "react";
import { IComponentPropsExtended } from "./interface";
import { useRouter } from "next/navigation";
import { api } from "@sps/sps-website-builder-models-layout-frontend-api-client";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { FormField } from "@sps/ui-adapter";
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@sps/shadcn";
import { useActionTrigger } from "@sps/hooks";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(2).max(50),
});

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();

  const [updateLayout, updateLayoutResult] = api.rtk.useUpdateMutation();
  const [createLayout, createLayoutResult] = api.rtk.useCreateMutation();

  // const methods = useForm<any>({
  //   mode: "all",
  // });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  useActionTrigger({
    storeName: "sps-website-builder/pages",
    actionFilter: (action) => {
      return action.type === "pages/executeMutation/fulfilled";
    },
    callbackFunction: async (action) => {
      await form.trigger().then((isValid) => {
        if (isValid) {
          form.handleSubmit(onSubmit)();
        }
      });
    },
  });

  // const {
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  //   setValue,
  // } = methods;

  const watchData = form.watch();

  useEffect(() => {
    console.log(`🚀 ~ useEffect ~ watchData:`, watchData);
  }, [watchData]);

  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(`🚀 ~ onSubmit ~ data:`, data);
    if (props.data?.id) {
      await updateLayout({ id: props.data?.id, data });

      return;
    }

    await createLayout({
      data,
    });
  }

  useEffect(() => {
    if (updateLayoutResult.data || createLayoutResult.data) {
      router.refresh();
    }
  }, [updateLayoutResult, createLayoutResult]);

  return (
    <div
      data-module="sps-website-builder"
      data-model="layout"
      data-variant={props.variant}
      className={props.className || ""}
    >
      <Form {...form}>
        <form className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title for layout" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          {/* <Button type="submit">Submit</Button> */}
        </form>
      </Form>
      {/* <FormProvider {...methods}>
        <div className="flex flex-col gap-3">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="Type title"
              onChange={(event) => {
                setValue("title", event.target.value);
              }}
            />
          </div>
          <div>
            <Label>Variant</Label>
            <Select
              onValueChange={(value) => {
                setValue("variant", value);
              }}
              defaultValue={props.data?.variant || ""}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select variant" />
              </SelectTrigger>
              <SelectContent>
                {["wide", "boxed", "default"].map((variant, index) => {
                  return (
                    <SelectItem key={index} value={variant}>
                      {variant}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>
      </FormProvider> */}
    </div>
  );
}
