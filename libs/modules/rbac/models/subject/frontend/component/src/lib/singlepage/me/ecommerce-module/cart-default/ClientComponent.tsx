"use client";

import { Component as Subject } from "@sps/rbac/models/subject/frontend/component";
import { IComponentPropsExtended } from "./interface";
import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@sps/shared-ui-shadcn";

export function Component(props: IComponentPropsExtended) {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="w-10 h-10 flex flex-row items-center justify-center rounded-full border border-primary relative">
          <ShoppingCart className="w-4 h-4 text-primary" />

          <Subject
            isServer={false}
            variant="ecommerce-module-order-list-quantity-default"
            data={props.data}
            language={props.language}
            className=""
          >
            {({ data: ecommerceModuleOrderQuantity }) => {
              if (ecommerceModuleOrderQuantity) {
                return (
                  <div className="absolute -top-1 -left-1 w-fit min-w-5 h-5 px-1 rounded-xl bg-primary flex items-center justify-center text-[10px] font-medium text-white">
                    <p className="text-white">{ecommerceModuleOrderQuantity}</p>
                  </div>
                );
              }

              return <></>;
            }}
          </Subject>
        </div>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <Subject
            isServer={false}
            variant="ecommerce-module-order-list-checkout-default"
            data={props.data}
            language={props.language}
            className="w-fit"
          ></Subject>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
