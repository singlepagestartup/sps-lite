import { Dispatch, FC, SetStateAction } from "react";
import Simple from "./Simple";
import { ISpsLiteBackendSlideOver } from "types/collection-types/sps-lite";

export interface ISpsLiteSlideOver extends ISpsLiteBackendSlideOver {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export const variants = {
  simple: Simple,
};

export default function Pricings(props: ISpsLiteSlideOver) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteSlideOver>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
