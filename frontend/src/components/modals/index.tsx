import {
  useState,
  useEffect,
  FC,
  SetStateAction,
  Dispatch,
  useMemo,
} from "react";
import { useRouter } from "next/router";
import { useGetModalsQuery } from "~redux/services/backend/models/modals";
import Simple from "./Simple";
import { IBackendModal } from "types/collection-types/sps-lite";

export interface IModal extends Omit<IBackendModal, `id`> {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

const variants = {
  simple: Simple,
};

export default function Modals({ modals = [] }: { modals?: IModal[] }) {
  const router = useRouter();
  const { query } = router;
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState<Omit<IBackendModal, `id`>>();

  const { data: backendModals } = useGetModalsQuery({});

  const localModals = useMemo(() => {
    if (backendModals) {
      return [...modals, ...backendModals];
    }

    return [...modals];
  }, [modals, backendModals]);

  useEffect(() => {
    if (!localModals) {
      return;
    }

    for (const modal of localModals) {
      if (query.opened_popup === modal.uid) {
        setModalProps(modal);
      }
    }
  }, [localModals, query.opened_popup]);

  useEffect(() => {
    if (query.opened_popup && !isOpen) {
      setIsOpen(true);
    }
  }, [query]);

  const Comp = variants[
    modalProps?.variant as keyof typeof variants
  ] as FC<IModal>;

  if (!Comp || !modalProps) {
    return <></>;
  }

  return <Comp {...modalProps} isOpen={isOpen} setIsOpen={setIsOpen} />;
}
