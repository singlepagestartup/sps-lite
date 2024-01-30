"use client";

import { api } from "../api";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IComponent as IButton } from "@sps/sps-website-builder-contracts/lib/components/elements/button/interfaces";
import { IComponent as IButtonExtended } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/button/interfaces";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/button/populate";

export interface IElement extends IButton {
  showSkeletons?: boolean;
}
export interface IElementExtended extends IButtonExtended {
  showSkeletons?: boolean;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export async function Element(props: IElement) {
  const data = await api.findByIdAndName<IButtonExtended>({
    id: props.id,
    name: "elements.button",
    populate,
  });

  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  if (!data) {
    return <Comp showSkeletons={true} {...props} />;
  }

  return <Comp {...data} />;
}
