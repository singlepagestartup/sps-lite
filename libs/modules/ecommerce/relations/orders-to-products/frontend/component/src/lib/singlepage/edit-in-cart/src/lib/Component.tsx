"use client";

import { IComponentPropsExtended } from "./interface";
import { cn } from "@sps/shared-frontend-client-utils";
import { api } from "@sps/ecommerce/relations/orders-to-products/sdk/client";
// import { useRouter } from "next/navigation";
import { Button } from "@sps/shared-ui-shadcn";
// import { useEffect } from "react";

export function Component(props: IComponentPropsExtended) {
  // const router = useRouter();
  const deleteEntity = api.delete();

  async function onDelete() {
    deleteEntity.mutate({
      id: props.data.id,
    });
  }

  // useEffect(() => {
  //   if (deleteEntity.isSuccess) {
  //     router.refresh();
  //   }
  // }, [deleteEntity.isSuccess]);

  return (
    <div
      data-module="ecommerce"
      data-relation="orders-to-products"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className={cn("w-full flex", props.data.className)}
    >
      <Button onClick={onDelete} variant="destructive">
        Remove from cart
      </Button>
    </div>
  );
}
