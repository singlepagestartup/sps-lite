import {
  useState,
  Fragment,
  useEffect,
  useMemo,
  FC,
  SetStateAction,
  Dispatch,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { IModal } from "types";
import { useGetModalsQuery } from "~redux/services/backend/models/modals";
import PageBlocks from "~components/layout/page-blocks";
import Simple from "./Simple";

export interface IModalComponent extends IModal {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

const variants = {
  simple: Simple,
};

export default function Modals() {
  const router = useRouter();
  const { query } = router;
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState<IModal>();

  const { data: modals } = useGetModalsQuery({});

  useEffect(() => {
    if (!modals) {
      return;
    }

    for (const modal of modals) {
      if (query.opened_popup === modal.uid) {
        setModalProps(modal);
      }
    }
  }, [modals, query.opened_popup]);

  useEffect(() => {
    if (query.opened_popup && !isOpen) {
      setIsOpen(true);
    }
  }, [query]);

  const Comp = variants[
    modalProps?.variant as keyof typeof variants
  ] as FC<IModalComponent>;

  if (!Comp || !modalProps) {
    return <></>;
  }

  return <Comp {...modalProps} isOpen={isOpen} setIsOpen={setIsOpen} />;
}
