import { Dispatch, FC, SetStateAction } from "react";
import Simple from "./Simple";
import { ISpsLiteBackendSlideOver } from "types/collection-types/sps-lite";

export interface ISpsLiteSlideOverBlock extends ISpsLiteBackendSlideOver {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export const variants = {
  simple: Simple,
};

export default function Pricings(props: ISpsLiteSlideOverBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteSlideOverBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
