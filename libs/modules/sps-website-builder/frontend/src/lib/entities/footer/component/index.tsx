import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import type { IEntity as IBackendFooter } from "@sps/sps-website-builder-contracts-extended/lib/entities/footer/interfaces";
import type { IEntity as IBackendPage } from "@sps/sps-website-builder-contracts-extended/lib/entities/page/interfaces";
import { FETCH_TYPE } from "@sps/utils";
import { Server } from "./server";
import { Client } from "./client";

export interface IFooter extends IBackendFooter {
  showSkeletons?: boolean;
  page: IBackendPage;
}

export const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export function Entity(props: IFooter) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  if (FETCH_TYPE === "server") {
    return <Server {...props} />;
  }

  return <Client {...props} />;
}
