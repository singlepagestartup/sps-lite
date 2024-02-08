"use client";

// import { api as cartApi } from "../../../../cart/api/client";
import { Component as Cart } from "@sps/sps-ecommerce-frontend/lib/models/cart/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  // const { data: carts } = cartApi.useFindQuery({});

  // const { data: invoice, refetch } = invoiceApi.useFindOneQuery(
  //   { id: checkoutData?.id },
  //   { skip: !checkoutData?.id },
  // );

  // console.log(`🚀 ~ Component ~ watchData:`, watchData);

  // useEffect(() => {
  //   if (checkoutData) {
  //     reset();
  //     setInterval(() => {
  //       refetch();
  //     }, 3000);
  //   }
  // }, [checkoutData, reset]);

  // if (isLoading || isFetching || isUninitialized) {
  //   return <Skeleton {...props} />;
  // }

  // if (!cart) {
  //   return <></>;
  // }

  // if (checkoutData) {
  //   return <Invoice isServer={false} variant="default" {...checkoutData} />;
  // }

  return (
    <div className="mx-auto max-w-7xl py-16 px-2 lg:px-0">
      <p className="text-4xl font-bold pt-10 pb-2">Checkout Form Block</p>
      <p className="text-2xl pb-10">SingleStepWithCart</p>
      <div className="py-4">
        <Cart variant="list" isServer={false} />
      </div>
    </div>
  );
}
