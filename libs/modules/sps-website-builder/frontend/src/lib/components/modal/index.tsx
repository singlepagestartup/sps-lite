"use client";

import { useState, useEffect, FC, useMemo } from "react";
import { api as modalApi } from "../../redux/entities/modal/api";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import type { IEntity as IBackendModal } from "../../redux/entities/modal/interfaces";
import type { IEntity as IBackendPage } from "../../redux/entities/page/interfaces";
import { getTargetPage } from "@sps/utils";

export interface IModal extends Omit<IBackendModal, "id"> {
  isOpenModal: boolean;
  showSkeletons?: boolean;
  page: IBackendPage;
  closeModal: () => void;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export function Modal({ modals = [] }: { modals?: IModal[] }) {
  const query = useSearchParams();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const openedModal = query?.get("opened_modal");
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState<Omit<IBackendModal, "id">>();

  const [page, setPage] = useState<IBackendPage>(); //?

  useEffect(() => {
    if (params) {
      getTargetPage(params).then((res) => {
        setPage(res);
      });
    }
  }, [JSON.stringify(params)]);

  const {
    data: backendModals,
    isLoading,
    isError,
    isFetching,
  } = modalApi.useGetQuery({
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

  if (!Comp || !modalProps || isError || !page) {
    return <></>;
  }

  return (
    <Comp
      {...modalProps}
      page={page}
      isOpenModal={isOpen}
      closeModal={closeModal}
      showSkeletons={isLoading || isFetching}
    />
  );
}
