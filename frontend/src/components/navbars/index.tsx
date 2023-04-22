"use client";

import { FC } from "react";
import { ISpsLiteNavbar, variants as spsLiteVariants } from "./sps-lite";
import { useGetNavbarByIdQuery } from "~redux/services/backend/models/navbars";

const variants = {
  ...spsLiteVariants,
};

export default function Navbars<T extends ISpsLiteNavbar>(props: T) {
  const { data: navbar } = useGetNavbarByIdQuery(
    { id: props.id },
    { skip: !props.id }
  );

  const Comp = variants[props.variant as keyof typeof variants] as FC<T>;

  if (!Comp || !navbar) {
    return <></>;
  }

  return <Comp {...props} {...navbar} />;
}
