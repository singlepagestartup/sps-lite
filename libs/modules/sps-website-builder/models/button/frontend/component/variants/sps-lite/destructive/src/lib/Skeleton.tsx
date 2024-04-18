import { IComponentProps } from "./interface";

export function Skeleton(props: IComponentProps) {
  return (
    <div className={`skeleton ${props.data.className || "h-10 w-32"}`}></div>
  );
}
