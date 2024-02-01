"use client";

import { ReactNode } from "react";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import type { IEntity } from "@sps/sps-website-builder-contracts/lib/entities/flyout/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/entities/flyout/interfaces";
import { api } from "../api";

export interface IComponentProps extends IEntity {
  showSkeletons?: boolean;
  children: ReactNode;
}
export interface IComponentPropsExtended extends IEntityExtended {
  showSkeletons?: boolean;
  children: ReactNode;
}

export const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export function Component(props: IComponentProps) {
  const { data, isLoading, isError, isFetching, isUninitialized } =
    api.useFindOneQuery({ id: props.id }, { skip: !props.id });

  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp || isError || !data) {
    return <></>;
  }

  return (
    <Comp {...props} {...data}>
      {props.children}
    </Comp>
  );
}
