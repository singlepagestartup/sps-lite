import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IComponent as IFeature } from "@sps/sps-website-builder-contracts/lib/components/elements/feature/interfaces";
import { IComponent as IFeatureExtended } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/feature/interfaces";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/feature/populate";
import { api } from "../api";

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export interface IComponent extends IFeature {
  variant: "simple";
  showSkeletons?: boolean;
}

export interface IComponentExtended extends IFeatureExtended {
  variant: "simple";
  showSkeletons?: boolean;
}

export async function Component(props: IFeature) {
  const data = await api.findByIdAndName<IFeatureExtended>({
    id: props.id,
    name: "elements.feature",
    populate,
  });

  const Comp = variants["simple"];

  if (!data) {
    return <Comp showSkeletons={true} variant="simple" {...props} />;
  }

  return <Comp variant="simple" {...data} />;
}
