"use client";

import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { api as layoutApi } from "../api";
import { useParams, usePathname } from "next/navigation";
import type { IEntity as IBackendLayout } from "@sps/sps-website-builder-contracts-extended/lib/entities/layout/interfaces";
import type { IEntity as IBackendLoader } from "@sps/sps-website-builder-contracts-extended/lib/entities/loader/interfaces";
import type { IEntity as IBackendPage } from "@sps/sps-website-builder-contracts-extended/lib/entities/page/interfaces";
import { getTargetPage } from "@sps/utils";
// import { slice as userSlice } from "../../../../../../../../apps/frontend/src/redux/auth/slice/index";

export interface ILayout extends IBackendLayout {
  children: ReactNode;
  page: IBackendPage;
  loader?: IBackendLoader | null;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export function Entity({ children }: { children?: ReactNode }) {
  const pathname = usePathname();
  const params = useParams();
  const dispatch = useDispatch();
  // const userId = useSelector((state: any) => state.user?.id);
  // console.log("🚀 ~ Layout ~ userId:", userId);
  const { data: layout, error } = layoutApi.useGetByPageUrlQuery(
    {
      url: pathname?.includes("/auth") ? "/auth" : pathname,
      ...params,
    },
    { skip: !pathname },
  );
  const [page, setPage] = useState<IBackendPage>(); //?

  useEffect(() => {
    if (params) {
      getTargetPage(params).then((res) => {
        setPage(res);
      });
    }
  }, [JSON.stringify(params)]);

  // useEffect(() => {
  //   dispatch(userSlice.actions.setAnonymusUsername());
  // }, []);

  // Clear cache if user jwt is wrong
  useEffect(() => {
    // @ts-ignore
    if (error?.status === 401 && typeof window !== "undefined") {
      const jwt = window.localStorage.getItem("jwt");
      if (jwt) {
        window.localStorage.removeItem("jwt");
        window.location.reload();
      }
    }
  }, [error]);

  const Comp = layout
    ? variants[layout.variant as keyof typeof variants]
    : undefined;

  if (!Comp || !layout || !page) {
    return <>{children}</>;
  }

  return (
    <Comp {...layout} page={page}>
      {children}
    </Comp>
  );
}
