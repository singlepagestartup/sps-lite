"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { IBackendApiEntity as IBackendApiForm } from "~redux/services/backend/api/form/interfaces";

export interface IForm extends IBackendApiForm {
  showSkeletons?: boolean;
  successCallback?: any;
}

const variants = {
  ...spsLiteVariants,
};

export default function Forms(props: IForm) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
