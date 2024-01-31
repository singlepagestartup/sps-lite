import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IComponent } from "@sps/sps-website-builder-contracts/lib/components/elements/buttons-array/interfaces";
import { IComponent as IComponentExtended } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/buttons-array/interfaces";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/buttons-array/populate";
import { api } from "../api";

export interface IElement extends IComponent {
  showSkeletons?: boolean;
}
export interface IElementExtended extends IComponentExtended {
  showSkeletons?: boolean;
}

const variants = { ...spsLiteVariants, ...startupVariants };

export async function Element(props: IElement) {
  const data = await api.findByIdAndName<IComponentExtended>({
    id: props.id,
    name: "elements.buttons-array",
    populate,
  });

  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  if (!data) {
    return <Comp showSkeletons={true} {...props} />;
  }

  return <Comp {...props} {...data} />;
}
