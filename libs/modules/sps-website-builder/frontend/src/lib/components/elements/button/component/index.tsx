import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IComponent } from "@sps/sps-website-builder-contracts/lib/components/elements/button/interfaces";
import { IComponent as IComponentExtended } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/button/interfaces";
import { FETCH_TYPE } from "@sps/utils";
import { Server } from "./server";
import { Client } from "./client";

export interface IElement extends IComponent {
  showSkeletons?: boolean;
}
export interface IElementExtended extends IComponentExtended {
  showSkeletons?: boolean;
}

export const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export function Element(props: IElement) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  if (FETCH_TYPE === "server") {
    return <Server {...props} />;
  }

  return <Client {...props} />;
}
