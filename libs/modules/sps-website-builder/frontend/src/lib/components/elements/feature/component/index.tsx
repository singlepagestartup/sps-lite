import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IComponent as IFeature } from "@sps/sps-website-builder-contracts/lib/components/elements/feature/interfaces";
import { IComponent as IFeatureExtended } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/feature/interfaces";
import { api } from "../api";

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
  const { data, isFetching, isLoading, isUninitialized } = api.useFindOneQuery({
    id: props.id,
  });

  const Comp = variants["simple"];

  if (!Comp) {
    return <></>;
  }

  if (isFetching || isLoading || isUninitialized) {
    return <Comp variant="simple" showSkeletons={true} {...props} />;
  }

  return <Comp variant="simple" {...props} {...data} />;
}
