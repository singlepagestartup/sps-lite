"use client";

import { api as productApi } from "@sps/sps-ecommerce-frontend/lib/redux/entities/product/api";
import { api as invoiceApi } from "@sps/sps-billing-frontend/lib/redux/entities/invoice/api";
import { api as cartApi } from "@sps/sps-ecommerce-frontend/lib/redux/entities/cart/api";
import Skeleton from "./Skeleton";
import { IPageBlock } from "../..";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@sps/ui-adapter";
import { useGetPageUrlModelId } from "@sps/hooks";
import { useMyProfile } from "@sps/sps-rbac-frontend/lib/hooks/use-my-profile";

export default function Component(props: IPageBlock) {
  const { me } = useMyProfile();

  const {
    data: cart,
    isLoading,
    isFetching,
    isUninitialized,
  } = cartApi.useGetByIdQuery({ id: me?.cart?.id }, { skip: !me?.cart?.id });

  const router = useRouter();
  const id = useGetPageUrlModelId({
    modelName: "product",
    page: props.page,
  });

  const [checkout, { data: checkoutData }] = cartApi.useCheckoutMutation();
  const { data: invoice, refetch } = invoiceApi.useGetByIdQuery(
    { id: checkoutData?.id },
    { skip: !checkoutData?.id },
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
    if (checkoutData) {
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
  }, [checkoutData, reset]);

  async function onSubmit(data: any) {
    // data.tier = { id };
    console.log("🚀 ~ onSubmit ~ data:", data);

    await checkout({ id: cart?.id, data });
  }

  if (isLoading || isFetching || isUninitialized) {
    return <Skeleton {...props} />;
  }

  if (!cart) {
    return <></>;
  }

  if (invoice?.paymentUrl) {
    router.push(invoice.paymentUrl);
  }

  return (
    <div className="mx-auto max-w-7xl py-16 px-2 lg:px-0">
      <h1 className="text-6xl font-bold mb-8">{cart.id}</h1>
      <h1 className="text-6xl font-bold mb-8">{cart.orders?.length}</h1>
      <FormProvider {...methods}>
        <div className="flex flex-col gap-3">
          {/* <TextInput
            variant="text"
            name="email"
            placeholder="Input your email"
            label="Email for getting tier attachments"
          /> */}
          <Button
            ui="shadcn"
            variant="primary"
            title="Buy"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </FormProvider>
    </div>
  );
}
