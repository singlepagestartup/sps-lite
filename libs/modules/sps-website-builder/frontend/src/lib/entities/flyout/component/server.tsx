import { api } from "../api/server";
import { IComponentProps, variants } from ".";

export async function Server(props: IComponentProps) {
  const data = await api.findOne({
    id: props.id,
  });

  const Comp = variants[props.variant as keyof typeof variants];

  if (!data) {
    <Comp {...props} showSkeletons={true} />;
  }

  return <Comp {...props} {...data} />;
}
