import { api } from "../api/server";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/entities/footer/populate";
import { IEntity } from "@sps/sps-website-builder-contracts-extended/lib/entities/footer/interfaces";
import { IFooter, variants } from ".";

export async function Server(props: IFooter) {
  const data = await api.findOne<IEntity>({
    id: props.id,
    model: "footers",
    populate,
  });

  const Comp = variants[props.variant as keyof typeof variants];

  if (!data) {
    <Comp {...props} showSkeletons={true} />;
  }

  return <Comp {...props} {...data} />;
}
