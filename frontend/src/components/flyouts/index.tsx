"use client";

import { FC } from "react";
import { ISpsLiteFlyout, variants as spsLiteVariants } from "./sps-lite";
import { Popover } from "@headlessui/react";
import { useGetFlyoutByIdQuery } from "~redux/services/backend/models/flyouts";

const variants = {
  ...spsLiteVariants,
};

export default function Flyouts<T extends ISpsLiteFlyout>(props: any) {
  const { data, isLoading, isError, isFetching, isUninitialized } =
    useGetFlyoutByIdQuery(
      {
        id: props.id,
      },
      { skip: !props.id },
    );

  const Comp = variants[props?.variant as keyof typeof variants] as FC<any>;

  if (!Comp || isError) {
    return <></>;
  }

  return (
    <Popover>
      {(popoverProps) => {
        return (
          <div className="relative">
            <Popover.Button as="div" className="w-full">
              {props.children}
            </Popover.Button>
            <Comp
              {...data}
              {...popoverProps}
              showSkeletons={isLoading || isFetching || isUninitialized}
            />
          </div>
        );
      }}
    </Popover>
  );
}
