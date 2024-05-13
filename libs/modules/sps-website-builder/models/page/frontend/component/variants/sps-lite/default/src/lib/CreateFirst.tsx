"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@sps/shadcn";
import { api } from "@sps/sps-website-builder-models-page-frontend-api-client";
import { Button, FormField } from "@sps/ui-adapter";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

export function Component() {
  const router = useRouter();
  const [createPage, createPageResult] = api.rtk.useCreateMutation();

  const methods = useForm<any>({
    mode: "all",
  });

  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  const watchData = watch();

  async function onSubmit(data: any) {
    await createPage({ data });
  }

  useEffect(() => {
    if (createPageResult.data) {
      router.refresh();
    }
  }, [createPageResult]);

  return (
    <div className="w-full py-10 flex flex-col">
      <div className="w-full max-w-7xl mx-auto px-5">
        <Card>
          <CardHeader>
            <CardTitle>Create your first page</CardTitle>
          </CardHeader>
          <CardContent>
            <FormProvider {...methods}>
              <div className="flex flex-col gap-4">
                <FormField
                  ui="sps"
                  type="text"
                  name="title"
                  placeholder="Page title"
                  label="Title"
                />
                <Button
                  ui="sps"
                  data-ui-variant="primary"
                  className="w-full"
                  onClick={handleSubmit(onSubmit)}
                >
                  Create
                </Button>
              </div>
            </FormProvider>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
