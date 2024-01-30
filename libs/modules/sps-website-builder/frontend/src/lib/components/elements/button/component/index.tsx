"use client";

import { api } from "../api";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IComponent } from "@sps/sps-website-builder-contracts/lib/components/elements/button/interfaces";
import { IComponent as IComponentExtended } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/button/interfaces";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/button/populate";

export interface IElement extends IComponent {
  showSkeletons?: boolean;
}
export interface IElementExtended extends IComponentExtended {
  showSkeletons?: boolean;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export async function Element(props: IElement) {
  const data = await api.findByIdAndName<IComponentExtended>({
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
