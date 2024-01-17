import * as React from "react";
import { Input as TextInput, InputProps } from "./shadcn";

export interface Props extends InputProps {}

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <TextInput {...props} />;
});

Input.displayName = "Input";

export default Input;
