import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IComponent } from "@sps/sps-website-builder-contracts/lib/components/elements/logotype/interfaces";
import { IComponent as IComponentExtended } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/logotype/interfaces";
import { FETCH_TYPE } from "@sps/utils";
import { Server } from "./server";
import { Client } from "./client";

export const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export interface IComponentProps extends IComponent {
  variant: "simple";
  showSkeletons?: boolean;
}

export interface IComponentPropsExtended extends IComponentExtended {
  variant: "simple";
  showSkeletons?: boolean;
}

export async function Component(props: IComponent) {
  const Comp = variants["simple"];

  if (!Comp) {
    return <></>;
  }

  if (FETCH_TYPE === "server") {
    return <Server variant="simple" {...props} />;
  }

  return <Client variant="simple" {...props} />;
}
