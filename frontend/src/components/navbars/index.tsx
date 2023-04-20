"use client";

import { FC, useEffect, useState } from "react";
import { ISpsLiteNavbar, variants as spsLiteVariants } from "./sps-lite";
import { getBackendData } from "~utils/api";
import { BACKEND_URL } from "~utils/envs";
import { pageBlockPopulate } from "~utils/api/queries";
import { useParams } from "next/navigation";

const variants = {
  ...spsLiteVariants,
};

export default function Navbars<T extends ISpsLiteNavbar>(props: T) {
  const [data, setData] = useState<any>();

  useEffect(() => {
    getBackendData({
      url: `${BACKEND_URL}/api/navbars/${props.id}`,
      params: {
        locale: props?.locale,
        populate: pageBlockPopulate,
      },
    }).then((res) => {
      setData(res);
    });
  }, [props]);

  const Comp = variants[props.variant as keyof typeof variants] as FC<T>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} {...data} />;
}
