"use client";

import { useState, useEffect, FC, useMemo } from "react";
import { api as modalApi } from "@sps/sps-website-builder-models-modal-frontend-api";
import { variants } from "./variants";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import type { IModel as IBackendModal } from "@sps/sps-website-builder-models-modal-contracts";
import type { IModel as IBackendPage } from "@sps/sps-website-builder-models-page-contracts";
import { getTargetPage } from "@sps/utils";

export interface IModal extends Omit<IBackendModal, "id"> {
  isOpenModal: boolean;
  showSkeletons?: boolean;
  page: IBackendPage;
  closeModal: () => void;
}

export function Component({ modals = [] }: { modals?: IModal[] }) {
  const query = useSearchParams();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const openedModal = query?.get("opened_modal");
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState<IBackendModal>();

  const [page, setPage] = useState<IBackendPage>(); //?

  useEffect(() => {
    if (params) {
      // getTargetPage(params).then((res) => {
      //   setPage(res);
      // });
    }
  }, [JSON.stringify(params)]);

  const {
    data: backendModals,
    isLoading,
    isError,
    isFetching,
  } = modalApi.client.useFindManyQuery({
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
        // setModalProps(modal);
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

  const Comp = variants[modalProps?.variant as keyof typeof variants];

  function closeModal() {
    setIsOpen(false);

    if (typeof router?.replace === "function") {
      router.replace(pathname, { scroll: false });
    }
  }

  if (!Comp || !modalProps || isError || !page) {
    return <></>;
  }

  return <></>;

  // return (
  //
  //     <Comp
  //       variant={modalProps.variant}
  //       data={modalProps}
  //       isOpenModal={isOpen}
  //       closeModal={closeModal}
  //       showSkeletons={isLoading || isFetching}
  //     />
  //
  // );
}
