"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { api as flyoutApi } from "../../redux/entities/flyout";
import type { IEntity as IBackendFlyout } from "@sps/sps-website-builder-contracts-extended/lib/entities/flyout/interfaces";
import type { IEntity as IBackendPage } from "@sps/sps-website-builder-contracts-extended/lib/entities/page/interfaces";
import { getTargetPage } from "@sps/utils";
import { useParams } from "next/navigation";

export interface IFlyout extends IBackendFlyout {
  showSkeletons?: boolean;
  children: ReactNode;
  page: IBackendPage;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export function Flyout({ flyout, children }: { flyout?: any; children?: any }) {
  const params = useParams();
  const [flyoutProps, setFlyoutProps] = useState<any>();
  const [page, setPage] = useState<IBackendPage>(); //?

  useEffect(() => {
    if (params) {
      getTargetPage(params).then((res) => {
        setPage(res);
      });
    }
  }, [JSON.stringify(params)]);

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

  if (!Comp || !children || isError || !page) {
    return <></>;
  }

  return (
    <Comp {...flyoutProps} page={page}>
      {children}
    </Comp>
  );
}
