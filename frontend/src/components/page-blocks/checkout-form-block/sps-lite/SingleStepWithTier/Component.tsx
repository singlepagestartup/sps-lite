"use client";

import { api as tiersApi } from "~redux/services/backend/extensions/sps-subscription/api/tier/api";
import { api as invoiceApi } from "~redux/services/backend/extensions/sps-billing/api/invoice/api";
import useGetPageUrlModelId from "~hooks/use-get-page-url-model-id";
import Skeleton from "./Skeleton";
import { IPageBlock } from "../..";
import Button from "~components/elements/button";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import Input from "~components/input";
import { useRouter } from "next/navigation";

export default function Component(props: IPageBlock) {
  const router = useRouter();
  const id = useGetPageUrlModelId({
    modelName: "tier",
  });

  const {
    data: tier,
    isLoading,
    isFetching,
    isUninitialized,
  } = tiersApi.useGetByIdQuery({ id }, { skip: !id });
  const [createInvoice, { data: createInvoiceData }] =
    invoiceApi.useCreateMutation();
  const { data: invoice, refetch } = invoiceApi.useGetByIdQuery(
    { id: createInvoiceData?.id },
    { skip: !createInvoiceData?.id },
  );

  const methods = useForm<any>({
    mode: "all",
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = methods;

  const watchData = watch();

  useEffect(() => {
    if (createInvoiceData) {
      reset();
      setInterval(() => {
        refetch();
      }, 3000);
      // router.push(`/articles/${createArticleData.id}`);
      // if (typeof props.successCallback === "function") {
      //   props.successCallback(data);
      //   props.successCallback(data);
      // }
    }
  }, [createInvoiceData, reset]);

  async function onSubmit(data: any) {
    data.tier = { id };
    console.log("🚀 ~ onSubmit ~ data:", data);

    await createInvoice({ data });
  }

  if (isLoading || isFetching || isUninitialized) {
    return <Skeleton {...props} />;
  }

  if (!tier) {
    return <></>;
  }

  if (invoice?.paymentUrl) {
    router.push(invoice.paymentUrl);
  }

  return (
    <div className="mx-auto max-w-7xl py-16 px-2 lg:px-0">
      <h1 className="text-6xl font-bold mb-8">{tier.title}</h1>
      <h1 className="text-6xl font-bold mb-8">{tier.price}</h1>
      <FormProvider {...methods}>
        <div className="flex flex-col gap-3">
          <Input
            variant="text"
            name="email"
            placeholder="Input your email"
            label="Email for getting tier attachments"
          />
          <Button
            variant="primary"
            title="Buy"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </FormProvider>
    </div>
  );
}
