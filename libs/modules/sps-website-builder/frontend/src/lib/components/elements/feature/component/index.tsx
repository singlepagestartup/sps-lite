import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IComponent as IFeature } from "@sps/sps-website-builder-contracts/lib/components/elements/feature/interfaces";
import { IComponent as IFeatureExtended } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/feature/interfaces";
import { Server } from "./server";
import { Client } from "./client";
import { FETCH_TYPE } from "@sps/utils";

export const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export interface IComponentProps extends IFeature {
  variant: "simple";
  showSkeletons?: boolean;
}

export interface IComponentPropsExtended extends IFeatureExtended {
  variant: "simple";
  showSkeletons?: boolean;
}

export function Component(props: IFeature) {
  const Comp = variants["simple"];

  if (!Comp) {
    return <></>;
  }

  if (FETCH_TYPE === "server") {
    return <Server variant="simple" {...props} />;
  }

  return <Client variant="simple" {...props} />;
}
