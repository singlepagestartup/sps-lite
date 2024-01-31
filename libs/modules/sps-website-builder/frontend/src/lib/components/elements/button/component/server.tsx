import { api } from "../api/server";
import { IComponent as IComponentExtended } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/button/interfaces";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/button/populate";
import { IElement, variants } from ".";

export async function Server(props: IElement) {
  const data = await api.findByIdAndName<IComponentExtended>({
    id: props.id,
    name: "elements.button",
    populate,
  });

  const Comp = variants[props.variant as keyof typeof variants];

  if (!data) {
    return <Comp showSkeletons={true} {...props} />;
  }

  return <Comp {...props} {...data} />;
}
