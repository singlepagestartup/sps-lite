import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IComponent } from "@sps/sps-website-builder-contracts/lib/components/elements/logotype/interfaces";
import { IComponent as IComponentExtended } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/logotype/interfaces";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/logotype/populate";
import { api } from "../api";

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export interface IElement extends IComponent {
  variant: "simple";
  showSkeletons?: boolean;
}

export interface IElementExtended extends IComponentExtended {
  variant: "simple";
  showSkeletons?: boolean;
}

export async function Component(props: IComponent) {
  const data = await api.findByIdAndName<IComponentExtended>({
    id: props.id,
    name: "elements.logotype",
    populate,
  });

  const Comp = variants["simple"];

  if (!data) {
    return <Comp showSkeletons={true} variant="simple" {...props} />;
  }

  return <Comp variant="simple" {...data} />;
}
