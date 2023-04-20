"use client";

import { useState, useEffect, FC, useMemo } from "react";
import { useGetModalsQuery } from "~redux/services/backend/models/modals";
import { IBackendModal } from "types/collection-types";
import { ISpsLiteModal, variants as spsLiteVariants } from "./sps-lite";
import { useParams, useSearchParams } from "next/navigation";

export interface IModal extends ISpsLiteModal {}

const variants = {
  ...spsLiteVariants,
};

export default function Modals({ modals = [] }: { modals?: IModal[] }) {
  const query = useSearchParams();
  const params = useParams();
  const openedModal = query?.get(`opened_modal`);
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
      if (openedModal === modal.uid) {
        setModalProps(modal);
      }
    }
  }, [localModals, openedModal]);

  useEffect(() => {
    if (openedModal && !isOpen) {
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
