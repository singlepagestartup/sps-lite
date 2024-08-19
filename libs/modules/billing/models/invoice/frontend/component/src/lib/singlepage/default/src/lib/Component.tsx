"use client";

import { Button } from "@sps/shared-ui-shadcn";
import { IComponentPropsExtended } from "./interface";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();

  useEffect(() => {
    if (props.data.status === "draft") {
      router.push(props.data.paymentUrl);
    }
  }, [props.data.paymentUrl]);

  return (
    <div
      data-module="billing"
      data-model="invoice"
      data-id={props.data?.id || ""}
      data-variant={props.variant}
      className="w-full py-10 text-center flex flex-col gap-1"
    >
      <p className="font-bold">ID: {props.data.id}</p>
      <p className="font-bold text-4xl">Status: {props.data.status}</p>
      {props.data.paymentUrl ? (
        <Button asChild={true} variant="primary">
          <Link href={props.data.paymentUrl}>Pay</Link>
        </Button>
      ) : null}
    </div>
  );
}
