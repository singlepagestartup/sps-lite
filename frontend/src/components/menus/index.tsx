import { FC, useEffect, useState } from "react";
import { ISpsLiteMenu, variants as spsLiteVariants } from "./sps-lite";
import { getBackendData } from "~utils/api";
import { BACKEND_URL } from "~utils/envs";
import { pageBlockPopulate } from "~utils/api/queries";

const variants = {
  ...spsLiteVariants,
};

export default function Menus<T extends ISpsLiteMenu>(props: T) {
  const [data, setData] = useState<any>();

  useEffect(() => {
    getBackendData({
      url: `${BACKEND_URL}/api/menus/${props.id}`,
      params: {
        locale: props.locale,
        populate: pageBlockPopulate,
      },
    }).then((res) => {
      setData(res);
    });
  }, []);

  const Comp = variants[props.variant as keyof typeof variants] as FC<T>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...data} />;
}
