import { Dispatch, FC, SetStateAction } from "react";
import Simple from "./Simple";
import { ISpsLiteBackendModal } from "~redux/services/backend/models/modal/interfaces/sps-lite";

export interface ISpsLiteModal extends Omit<ISpsLiteBackendModal, "id"> {
  isOpenModal: boolean;
  showSkeletons?: boolean;
  closeModal: () => void;
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
