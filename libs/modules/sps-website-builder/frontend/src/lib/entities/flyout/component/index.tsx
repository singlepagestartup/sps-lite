import { ReactNode, forwardRef } from "react";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import type { IEntity } from "@sps/sps-website-builder-contracts/lib/entities/flyout/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/entities/flyout/interfaces";
import type { IEntity as IBackendPage } from "@sps/sps-website-builder-contracts-extended/lib/entities/page/interfaces";
import { FETCH_TYPE } from "@sps/utils";
import { Server } from "./server";
import { Client } from "./client";

export interface IComponentProps extends IEntity {
  showSkeletons?: boolean;
  children: ReactNode;
  page: IBackendPage;
}
export interface IComponentPropsExtended extends IEntityExtended {
  showSkeletons?: boolean;
  children: ReactNode;
  page: IBackendPage;
}

export const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export function Component(props: IComponentProps) {
  if (FETCH_TYPE === "server") {
    return <Server {...props} />;
  }

  return <Client {...props} />;
}
