"use client";

import { useState, useEffect, FC, useMemo } from "react";
import { useGetModalsQuery } from "~redux/services/backend/models/modals";
import { IBackendModal } from "types/collection-types";
import { ISpsLiteModal, variants as spsLiteVariants } from "./sps-lite";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export type IModal = ISpsLiteModal;

const variants = {
  ...spsLiteVariants,
};

export default function Modals({ modals = [] }: { modals?: IModal[] }) {
  const query = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const openedModal = query?.get("opened_modal");
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState<Omit<IBackendModal, "id">>();

  const {
    data: backendModals,
    isLoading,
    isError,
    isFetching,
  } = useGetModalsQuery({
    locale: "all",
  });

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

    if (!openedModal && isOpen) {
      setIsOpen(false);
    }
  }, [openedModal]);

  const Comp = variants[
    modalProps?.variant as keyof typeof variants
  ] as FC<IModal>;

  function closeModal() {
    setIsOpen(false);

    if (typeof router?.replace === "function") {
      router.replace(pathname, { scroll: false });
    }
  }

  if (!Comp || !modalProps || isError) {
    return <></>;
  }

  return (
    <Comp
      {...modalProps}
      isOpenModal={isOpen}
      closeModal={closeModal}
      showSkeletons={isLoading || isFetching}
    />
  );
}
