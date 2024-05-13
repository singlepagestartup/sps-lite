import { variants } from "./variants";
import { IComponentProps } from "./interface";

export function Component(props: IComponentProps) {
  const Comp = variants[props.variant];

  if (!Comp) {
    return <></>;
  }

  // type guards works on component rendering
  // as any here is required for dynamic import
  // or you can use switch case, but it's not recommended
  return <Comp {...(props as any)} />;
}
