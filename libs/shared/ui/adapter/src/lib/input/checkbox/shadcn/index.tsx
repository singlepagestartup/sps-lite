import { forwardRef } from "react";
import { Checkbox } from "./shadcn";
import { Label } from "../../../label";
import { Props } from "..";

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, value } = props;

  return (
    <div className="items-top flex space-x-2">
      {/* @ts-ignore */}
      <Checkbox
        {...props}
        onClick={() => {
          if (props.onChange) {
            // @ts-ignore
            props.onChange(!value);
          }
        }}
        checked={
          value !== undefined && value !== "" ? (value ? true : false) : false
        }
      />
      <div className="-mt-0.5 grid gap-1.5 leading-none">
        <Label
          htmlFor={props.id}
          onClick={() => {
            if (props.onChange) {
              // @ts-ignore
              props.onChange(!value);
            }
          }}
        >
          {props.label}
        </Label>
      </div>
    </div>
  );
});

export default Input;
