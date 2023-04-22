"use client";

import { FC } from "react";
import { ISpsLiteFlyoutMenu, variants as spsLiteVariants } from "./sps-lite";
import { Popover } from "@headlessui/react";
import { useGetFlyoutMenuByIdQuery } from "~redux/services/backend/models/flyout-menus";

const variants = {
  ...spsLiteVariants,
};

export default function Menus<T extends ISpsLiteFlyoutMenu>(props: T) {
  const { data, isLoading, isError, isFetching } = useGetFlyoutMenuByIdQuery(
    {
      id: props.id,
    },
    { skip: !props.id }
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
              isLoading={isLoading || isFetching}
            />
          </div>
        );
      }}
    </Popover>
  );
}
