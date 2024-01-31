import { api } from "../api/server";
import { IFooter, variants } from ".";

export async function Server(props: IFooter) {
  const data = await api.findOne({
    id: props.id,
  });

  const Comp = variants[props.variant as keyof typeof variants];

  if (!data) {
    <Comp {...props} showSkeletons={true} />;
  }

  return <Comp {...props} {...data} />;
}
