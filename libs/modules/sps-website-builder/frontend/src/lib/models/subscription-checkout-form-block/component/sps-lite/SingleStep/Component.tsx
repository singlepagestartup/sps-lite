"use client";

// import { api as tierApi } from "@sps/sps-subscription-frontend/lib/redux/entities/tier";
// import { api as subscriptionApi } from "@sps/sps-subscription-frontend/lib/redux/entities/subscription";
// import { api as invoiceApi } from "@sps/sps-billing-frontend/lib/redux/entities/invoice";
// import { Skeleton } from "./Skeleton";
// import { FormProvider, useForm } from "react-hook-form";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "@sps/ui-adapter";
// import { useGetPageUrlModelId } from "@sps/hooks";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  // const router = useRouter();
  // const id = useGetPageUrlModelId({
  //   modelName: "tier",
  //   page: props.page,
  // });

  // const {
  //   data: tier,
  //   isLoading,
  //   isFetching,
  //   isUninitialized,
  // } = tierApi.useGetByIdQuery({ id }, { skip: !id });
  // const [createSubscription, { data: createSubscriptionData }] =
  //   subscriptionApi.useCreateMutation();
  // const { data: invoice, refetch } = invoiceApi.useGetByIdQuery(
  //   { id: createSubscriptionData?.id },
  //   { skip: !createSubscriptionData?.id },
  // );

  // const methods = useForm<any>({
  //   mode: "all",
  // });

  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
  //   watch,
  //   reset,
  //   formState: { errors },
  // } = methods;

  // const watchData = watch();

  // useEffect(() => {
  //   if (createSubscriptionData) {
  //     reset();
  //     setInterval(() => {
  //       refetch();
  //     }, 3000);
  //     // router.push(`/articles/${createArticleData.id}`);
  //     // if (typeof props.successCallback === "function") {
  //     //   props.successCallback(data);
  //     //   props.successCallback(data);
  //     // }
  //   }
  // }, [createSubscriptionData, reset]);

  // async function onSubmit(data: any) {
  //   data.tier = { id };
  //   console.log("🚀 ~ onSubmit ~ data:", data);

  //   await createSubscription({ data });
  // }

  // if (isLoading || isFetching || isUninitialized) {
  //   return <Skeleton {...props} />;
  // }

  // if (!tier) {
  //   return <></>;
  // }

  // if (invoice?.paymentUrl) {
  //   router.push(invoice.paymentUrl);
  // }

  return (
    <div className="mx-auto max-w-7xl py-16 px-2 lg:px-0">
      <p className="text-4xl font-bold pt-10 pb-2">
        Subscription Checkout Form Block
      </p>
      <p className="text-2xl pb-10">SingleStep</p>
      {/* <h1 className="text-6xl font-bold mb-8">{tier.title}</h1>
      <h1 className="text-6xl font-bold mb-8">{tier.price}</h1>
      <FormProvider {...methods}>
        <div className="flex flex-col gap-3">
          <TextInput
            variant="text"
            name="email"
            placeholder="Input your email"
            label="Email"
          />
          <Button
            ui="shadcn"
            variant="default"
            onClick={handleSubmit(onSubmit)}
          >
            Buy
          </Button>
        </div>
      </FormProvider> */}
    </div>
  );
}
