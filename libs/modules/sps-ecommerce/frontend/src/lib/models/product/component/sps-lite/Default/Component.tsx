"use client";

import { IComponentPropsExtended } from "../../interface";
import ReactMarkdown from "react-markdown";
import { Component as File } from "@sps/sps-file-storage-frontend/lib/models/file/component";
import { Button } from "@sps/ui-adapter";
import { Component as Attribute } from "../../../../attribute/component";
import Link from "next/link";

export function Component(props: IComponentPropsExtended) {
  // console.log(`🚀 ~ Component ~ globalStoreApis:`, globalStoreApis);

  // console.log(`🚀 ~ Product ~ globalState:`, globalState);
  // const { me } = useMyProfile();

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
        <File
          variant="image"
          isServer={false}
          containerClassName="relative w-full aspect-w-2 aspect-h-2 overflow-hidden rounded-md bg-gray-100"
          className="object-cover object-center"
          {...props.media[0]}
        />
      ) : null}
      <div className={"flex flex-col gap-2 py-6"}>
        <h3 className="font-medium text-gray-900">{props.title}</h3>

        {props.description ? (
          <div className="prose prose-sm max-w-none text-gray-500">
            <ReactMarkdown>{props.description}</ReactMarkdown>
          </div>
        ) : null}
        {props.attributes?.map((attribute, index) => {
          return (
            <Attribute
              isServer={false}
              variant="default"
              key={index}
              {...attribute}
            />
          );
        })}
        <Button ui="shadcn" asChild={true}>
          <Link href={`/checkout/${props.id}`}>Buy in 1 step</Link>
        </Button>
        {/* <FormProvider {...methods}>
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
