"use client";

import Image from "next/image";
import { IComponentPropsExtended } from "../../interface";
import { getFileUrl } from "@sps/utils";
import ReactMarkdown from "react-markdown";

export function Component(props: IComponentPropsExtended) {
  // const { me } = useMyProfile();

  // const { data: productAttributes } = attributeApi.useGetQuery({
  //   filters: {
  //     products: {
  //       id: { $in: [item.id] },
  //     },
  //     attribute_key: {
  //       key: "price",
  //     },
  //   },
  // });

  // const [incrementInCart, { data: incrementInCartData }] =
  //   productApi.useIncrementInCartMutation();
  // const [decrementInCart, { data: decrementInCartData }] =
  //   productApi.useDecrementInCartMutation();
  // const [removeFromCart, { data: removeFromCartData }] =
  //   productApi.useRemoveFromCartMutation();

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

  // const buttonTitle = useMemo(() => {
  //   if (!productAttributes?.length) {
  //     return "";
  //   }
  //   const priceAttribute = productAttributes[0];

  //   return priceAttribute.attributeKey
  //     ? `Buy for ${priceAttribute?.currency?.unicode || ""}${
  //         priceAttribute[priceAttribute?.attributeKey?.type]
  //       }`
  //     : "";
  // }, [productAttributes]);

  // async function incrementSubmit(data: any) {
  //   // data.tier = { id };
  //   console.log("🚀 ~ onSubmit ~ data:", data);

  //   await incrementInCart({ id: item?.id, data });
  // }

  // async function decrementSubmit(data: any) {
  //   // data.tier = { id };
  //   console.log("🚀 ~ onSubmit ~ data:", data);

  //   await decrementInCart({ id: item?.id, data });
  // }

  return (
    <div className="flex flex-col text-gray-500">
      {props.media?.length ? (
        <div className="relative w-full aspect-w-2 aspect-h-2 overflow-hidden rounded-md bg-gray-100">
          <Image
            src={getFileUrl(props.media[0])}
            alt=""
            fill={true}
            className="object-cover object-center"
          />
        </div>
      ) : null}
      <div className={"flex flex-col gap-2 py-6"}>
        <h3 className="font-medium text-gray-900">{props.title}</h3>

        {props.description ? (
          <div className="prose prose-sm max-w-none text-gray-500">
            <ReactMarkdown>{props.description}</ReactMarkdown>
          </div>
        ) : null}
        {/* <Button ui="shadcn" asChild={true}>
        <Link href={`/checkout/${item.id}`}>{buttonTitle}</Link>
      </Button>
      <FormProvider {...methods}>
        <FormField
          name="quantity"
          ui="sps"
          type="text"
          label="Quantity"
          initialValue={1}
        />
        <Button
          ui="shadcn"
          onClick={handleSubmit(incrementSubmit)}
          variant="secondary"
        >
          Increment in cart
        </Button>
        <Button
          ui="shadcn"
          onClick={handleSubmit(decrementSubmit)}
          variant="secondary"
        >
          Decrement in cart
        </Button>
      </FormProvider>

      <Button
        ui="shadcn"
        onClick={() => {
          removeFromCart({ id: item.id });
        }}
        variant="secondary"
      >
        Remove from cart
      </Button> */}
      </div>
    </div>
  );
}
