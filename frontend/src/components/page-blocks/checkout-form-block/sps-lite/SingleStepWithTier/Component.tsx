"use client";

import { api as tierApi } from "~redux/services/backend/extensions/sps-subscription/api/tier/api";
import { api as subscriptionApi } from "~redux/services/backend/extensions/sps-subscription/api/subscription/api";
import { api as invoiceApi } from "~redux/services/backend/extensions/sps-billing/api/invoice/api";
import useGetPageUrlModelId from "~hooks/use-get-page-url-model-id";
import Skeleton from "./Skeleton";
import { IPageBlock } from "../..";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import TextInput from "~components/ui/input/text/sps";
import Button from "~components/ui/button";

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
  } = tierApi.useGetByIdQuery({ id }, { skip: !id });
  const [createSubscription, { data: createSubscriptionData }] =
    subscriptionApi.useCreateMutation();
  const { data: invoice, refetch } = invoiceApi.useGetByIdQuery(
    { id: createSubscriptionData?.id },
    { skip: !createSubscriptionData?.id },
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
    if (createSubscriptionData) {
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
  }, [createSubscriptionData, reset]);

  async function onSubmit(data: any) {
    data.tier = { id };
    console.log("🚀 ~ onSubmit ~ data:", data);

    await createSubscription({ data });
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
      {/* <h1 className="text-6xl font-bold mb-8">{tier.price}</h1> */}
      <FormProvider {...methods}>
        <div className="flex flex-col gap-3">
          <TextInput
            variant="text"
            name="email"
            placeholder="Input your email"
            label="Email"
          />
          <Button onClick={handleSubmit(onSubmit)}>Buy</Button>
        </div>
      </FormProvider>
    </div>
  );
}
