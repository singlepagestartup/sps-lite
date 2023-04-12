import { useState, useEffect, FC, useMemo } from "react";
import { useRouter } from "next/router";
import { useGetModalsQuery } from "~redux/services/backend/models/modals";
import { IBackendModal } from "types/collection-types";
import { ISpsLiteModal, variants as spsLiteVariants } from "./sps-lite";

export interface IModal extends ISpsLiteModal {}

const variants = {
  ...spsLiteVariants,
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
      if (query.opened_modal === modal.uid) {
        setModalProps(modal);
      }
    }
  }, [localModals, query.opened_modal]);

  useEffect(() => {
    if (query.opened_modal && !isOpen) {
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
