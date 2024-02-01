import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IComponent } from "@sps/sps-website-builder-contracts/lib/components/elements/buttons-array/interfaces";
import { IComponent as IComponentExtended } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/buttons-array/interfaces";
import { api } from "../api";

export interface IComponentProps extends IComponent {
  showSkeletons?: boolean;
}
export interface IComponentPropsExtended extends IComponentExtended {
  showSkeletons?: boolean;
}

export const variants = { ...spsLiteVariants, ...startupVariants };

export async function Element(props: IComponentProps) {
  const { data, isFetching, isLoading, isUninitialized } = api.useFindOneQuery({
    id: props.id,
  });

  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  if (isFetching || isLoading || isUninitialized) {
    return <Comp showSkeletons={true} {...props} />;
  }

  return <Comp {...props} {...data} />;
}
