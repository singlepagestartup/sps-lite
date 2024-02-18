import { IComponentProps } from "./interface";
import Client from "./client";

export function FadeWithPreviews(props: IComponentProps) {
  const Comp = Client;

  return <Comp {...props} />;
}
