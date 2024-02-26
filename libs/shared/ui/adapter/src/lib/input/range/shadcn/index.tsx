import { forwardRef, useMemo } from "react";
import { Slider } from "./shadcn";
import { Props } from "..";

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const parsedValue = useMemo(() => {
    if (!props.value) {
      return props.min ? [props.min] : [0];
    }

    if (typeof props.value !== "number") {
      if (!Array.isArray(props.value)) {
        if (typeof props.value === "string") {
          return [parseInt(props.value)];
        }
      } else {
        return props.value.map((v) => {
          if (typeof v === "string") {
            return parseInt(v);
          }

          return v;
        });
      }
    }

    if (typeof props.value === "number") {
      return [props.value];
    }

    return [0];
  }, [props.value]);

  return (
    <Slider
      {...props}
      ref={ref}
      dir="ltr"
      value={parsedValue}
      onValueChange={props.onChange as any}
    />
  );
});

export default Input;
