"use client";

// import { api as productApi } from "../../../../../redux/entities/product/index";
// import { api as invoiceApi } from "@sps/sps-billing-frontend/lib/redux/entities/invoice";
// import { Skeleton } from "./Skeleton";
// import { FormProvider, useForm } from "react-hook-form";
// import { useEffect, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "@sps/ui-adapter";
// import { useGetPageUrlModelId } from "@sps/hooks";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  // const router = useRouter();
  // const id = useGetPageUrlModelId({
  //   modelName: "product",
  //   page: props.page,
  // });

  // const {
  //   data: product,
  //   isLoading,
  //   isFetching,
  //   isUninitialized,
  // } = productApi.useGetByIdQuery({ id }, { skip: !id });
  // const [singleStepCheckout, { data: singleStepCheckoutData }] =
  //   productApi.useSingleStepCheckoutMutation();
  // const { data: invoice, refetch } = invoiceApi.useGetByIdQuery(
  //   { id: singleStepCheckoutData?.id },
  //   { skip: !singleStepCheckoutData?.id },
  // );

  // const productPrice = useMemo(() => {
  //   if (!product) {
  //     return "";
  //   }

  //   return "";
  //   // const priceAttribute = product.attributes?.find(
  //   //   (attr) => attr.attributeKey?.key === "price",
  //   // );

  //   // if (!priceAttribute || !priceAttribute.attributeKey) {
  //   //   return "";
  //   // }

  //   // return `${priceAttribute?.currency?.unicode || ""}${
  //   //   priceAttribute[priceAttribute?.attributeKey?.type]
  //   // }`;
  // }, [product]);

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
  //   if (singleStepCheckoutData) {
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
  // }, [singleStepCheckoutData, reset]);

  // async function onSubmit(data: any) {
  //   // data.tier = { id };
  //   console.log("🚀 ~ onSubmit ~ data:", data);

  //   await singleStepCheckout({ id: product?.id, data });
  // }

  // if (isLoading || isFetching || isUninitialized) {
  //   return <Skeleton {...props} />;
  // }

  // if (!product) {
  //   return <></>;
  // }

  // if (invoice?.paymentUrl) {
  //   router.push(invoice.paymentUrl);
  // }

  return (
    <div className="mx-auto max-w-7xl py-16 px-2 lg:px-0">
      <p className="text-4xl font-bold pt-10 pb-2">Checkout Form Block</p>
      <p className="text-2xl pb-10">SingleStepWithProduct</p>
      {/* <h1 className="text-6xl font-bold mb-8">{product.title}</h1>
      <h1 className="text-6xl font-bold mb-8">{productPrice}</h1>
      <FormProvider {...methods}>
        <div className="flex flex-col gap-3">
          <TextInput
            variant="text"
            name="quantity"
            placeholder="Input quantity"
            initialValue={1}
            label="Quantity"
          />
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
