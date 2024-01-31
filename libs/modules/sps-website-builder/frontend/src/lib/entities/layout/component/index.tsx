import { ReactNode } from "react";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import type { IEntity as IBackendLayout } from "@sps/sps-website-builder-contracts-extended/lib/entities/layout/interfaces";
import type { IEntity as IBackendLoader } from "@sps/sps-website-builder-contracts-extended/lib/entities/loader/interfaces";
import type { IEntity as IBackendPage } from "@sps/sps-website-builder-contracts-extended/lib/entities/page/interfaces";
import { FETCH_TYPE } from "@sps/utils";
import { Server } from "./server";
import { Client } from "./client";

export interface ILayout extends IBackendLayout {
  children: ReactNode;
  page: IBackendPage;
  loader?: IBackendLoader | null;
}

export const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export function Component({ children }: { children?: ReactNode }) {
  if (FETCH_TYPE === "server") {
    return <Server>{children}</Server>;
  }

  return <Client>{children}</Client>;
}
