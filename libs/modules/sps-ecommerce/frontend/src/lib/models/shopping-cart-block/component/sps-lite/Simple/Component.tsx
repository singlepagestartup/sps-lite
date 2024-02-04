"use client";

// import ReactMarkdown from "react-markdown";
// import { api as cartApi } from "../../../../../redux/entities/cart/index";
// import { api as orderApi } from "../../../../../redux/entities/order/index";
// import { api as productApi } from "../../../../../redux/entities/product/index";
// import type { IModel as IBackendOrder } from "@sps/sps-ecommerce-contracts/lib/models/order/interfaces";
// import type { IModel as IBackendOrderProduct } from "@sps/sps-ecommerce-contracts/lib/models/order-product/interfaces";
// import type { IModel as IBackendAttribute } from "@sps/sps-ecommerce-contracts/lib/models/attribute/interfaces";
// import { useMemo } from "react";
// import { Button } from "@sps/ui-adapter";
// import Link from "next/link";
// import { useMyProfile } from "@sps/sps-rbac-frontend/lib/hooks/use-my-profile";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  // const { me } = useMyProfile();
  // const { data: cart } = cartApi.useGetByIdQuery(
  //   { id: me?.cart?.id },
  //   { skip: !me?.cart?.id },
  // );

  return (
    <div className="bg-white mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-primary-600">
          {props.subtitle}
        </h2>
        <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          {props.title}
        </p>
        {/* {props.description ? (
          <ReactMarkdown className="mx-auto my-8 max-w-xl text-xl text-gray-500">
            {props.description}
          </ReactMarkdown>
        ) : null}
        <div className="flex flex-col gap-2 justify-center">
          {cart?.orders?.map((order, index) => {
            return <OrderComponent key={index} order={order} />;
          })}
        </div>
        <div className="w-full">
          <Button ui="shadcn" variant="default" asChild={true}>
            <Link href="/checkout">Checkout</Link>
          </Button>
        </div> */}
      </div>
    </div>
  );
}

// function OrderComponent({ order }: { order: IBackendOrder }) {
//   const { data: filledOrder } = orderApi.useGetByIdQuery(
//     { id: order.id },
//     { skip: !order.id },
//   );

//   return (
//     <div className="py-3 flex flex-col gap-3">
//       {/* {filledOrder?.orderProducts?.map((orderProduct, index) => {
//         return (
//           <OrderProductComponent key={index} orderProduct={orderProduct} />
//         );
//       })} */}
//     </div>
//   );
// }

// function OrderProductComponent({
//   orderProduct,
// }: {
//   orderProduct: IBackendOrderProduct;
// }) {
//   const [removeFromCart, { data: removeFromCartData }] =
//     productApi.useRemoveFromCartMutation();

//   return (
//     <div className="border flex justify-between border-gray-200 rounded-md p-5">
//       <p className="font-bold">{orderProduct.product?.title}</p>
//       <div className="flex gap-2">
//         {orderProduct.attributes?.map((attribute, index) => {
//           return <AttributeComponent key={index} attribute={attribute} />;
//         })}
//         <Button
//           ui="shadcn"
//           variant="primary"
//           onClick={() => {
//             if (!orderProduct.product) {
//               return;
//             }

//             removeFromCart({ id: orderProduct.product.id });
//           }}
//         >
//           Delete
//         </Button>
//       </div>
//     </div>
//   );
// }

// function AttributeComponent({ attribute }: { attribute: IBackendAttribute }) {
//   const title = useMemo(() => {
//     return attribute.attributeKey?.title || "";
//   }, [attribute]);
//   const value = useMemo(() => {
//     if (!attribute.attributeKey) {
//       return "";
//     }

//     return attribute[attribute.attributeKey?.type] || "";
//   }, [attribute]);

//   return (
//     <div className="p-4 flex gap-2 border items-center border-gray-300 rounded-md">
//       <p className="text-gray-400 text-sm">{title}</p>
//       <p className="font-bold">{value}</p>
//     </div>
//   );
// }
