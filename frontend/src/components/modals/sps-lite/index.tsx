import { Dispatch, FC, SetStateAction } from "react";
import Simple from "./Simple";
import { ISpsLiteBackendModal } from "types/collection-types/sps-lite";

export interface ISpsLiteModal extends Omit<ISpsLiteBackendModal, `id`> {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export const variants = {
  simple: Simple,
};

export default function Modals(props: ISpsLiteModal) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteModal>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
