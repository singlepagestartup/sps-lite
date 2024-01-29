"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import type { IEntity as IBackendForm } from "@sps/sps-crm-contracts/lib/entities/form/interfaces";

export interface IForm extends IBackendForm {
  showSkeletons?: boolean;
  successCallback?: any;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export function Form(props: IForm) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
