"use client";

import { FC, useEffect, useState } from "react";
import { variants as spsLiteVariants } from "./sps-lite";
import { getBackendData } from "~utils/api";
import { BACKEND_URL } from "~utils/envs";
import { pageBlockPopulate } from "~utils/api/queries";
import { Popover } from "@headlessui/react";
import Buttons from "~components/elements/buttons";
import { ISpsLiteButton } from "~components/elements/buttons/sps-lite";

const variants = {
  ...spsLiteVariants,
};

export default function Menus<T extends ISpsLiteButton>(props: T) {
  const [data, setData] = useState<any>();

  useEffect(() => {
    getBackendData({
      url: `${BACKEND_URL}/api/flyout-menus/${props.flyoutMenu?.id}`,
      params: {
        populate: pageBlockPopulate,
      },
    }).then((res) => {
      setData(res);
    });
  }, [props.flyoutMenu]);

  const Comp = variants[data?.variant as keyof typeof variants] as FC<any>;

  if (!Comp) {
    return <></>;
  }

  return (
    <Popover>
      {(popoverProps) => {
        return (
          <div className="relative">
            <Popover.Button as="div" className="w-full">
              <Buttons
                {...({
                  ...props,
                  url: ``,
                  onClick: () => {},
                  flyoutMenu: null,
                } as T)}
              />
            </Popover.Button>
            <Comp {...data} {...popoverProps} />
          </div>
        );
      }}
    </Popover>
  );
}
