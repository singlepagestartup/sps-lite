import {
  forwardRef,
  type ComponentProps,
  type ComponentType,
  type RefAttributes,
} from "react";
import { variants } from "./variants";

export type IComponentProps = {
  [Variant in keyof typeof variants]: { variant: Variant } & ComponentProps<
    (typeof variants)[Variant]
  >;
}[keyof typeof variants];

export const Component = forwardRef<HTMLButtonElement, IComponentProps>(
  function Component(props, ref) {
    const Comp = variants[props.variant] as ComponentType<
      IComponentProps & RefAttributes<HTMLButtonElement>
    >;
    if (!Comp) return <></>;
    return <Comp {...props} ref={ref} />;
  },
);
