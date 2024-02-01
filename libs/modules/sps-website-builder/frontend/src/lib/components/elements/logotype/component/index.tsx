import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IComponent } from "@sps/sps-website-builder-contracts/lib/components/elements/logotype/interfaces";
import { IComponent as IComponentExtended } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/logotype/interfaces";
import { api } from "../api";

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

export function Component(props: IComponent) {
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
