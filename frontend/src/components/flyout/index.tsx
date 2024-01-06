"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { Popover } from "@headlessui/react";
import { api as flyoutApi } from "~redux/services/backend/extensions/sps-website-builder/api/flyout/api";
import { IEntity as IBackendFlyout } from "~redux/services/backend/extensions/sps-website-builder/api/flyout/interfaces";

export interface IFlyout extends IBackendFlyout {
  showSkeletons?: boolean;
  children: ReactNode;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export default function Flyout({
  flyout,
  children,
}: {
  flyout?: any;
  children?: any;
}) {
  const [flyoutProps, setFlyoutProps] = useState<any>();

  const {
    data: backendFlyouts,
    isLoading,
    isError,
    isFetching,
    isUninitialized,
  } = flyoutApi.useGetFlyoutsQuery({});

  const localFlyouts = useMemo(() => {
    if (backendFlyouts) {
      if (flyout) {
        return [flyout, ...backendFlyouts];
      }

      return backendFlyouts;
    }

    if (flyout) {
      return [flyout];
    }

    return [];
  }, [flyout, backendFlyouts]);

  useEffect(() => {
    if (!localFlyouts) {
      return;
    }

    for (const f of localFlyouts) {
      if (flyout.uid === f.uid) {
        setFlyoutProps(f);
      }
    }
  }, [localFlyouts, flyout]);

  const Comp = variants[flyoutProps?.variant as keyof typeof variants];

  if (!Comp || !children || isError) {
    return <></>;
  }

  return (
    <Popover>
      {(popoverProps) => {
        return (
          <div className="relative">
            <Popover.Button as="div" className="w-full">
              {children}
            </Popover.Button>
            <Comp
              {...flyoutProps}
              {...popoverProps}
              showSkeletons={isLoading || isFetching || isUninitialized}
            />
          </div>
        );
      }}
    </Popover>
  );
}
