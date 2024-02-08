"use client";

import { useRouter } from "next/navigation";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  const router = useRouter();

  if (props.paymentUrl) {
    router.push(props.paymentUrl);
  }

  return (
    <div className="bg-white mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <p>Invoice</p>
      </div>
    </div>
  );
}
