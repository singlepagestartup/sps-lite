import { IComponentProps } from "./interface";

export function Skeleton(props: IComponentProps) {
  return <div className={`skeleton ${props.data.className || "w-full"}`}></div>;
}
