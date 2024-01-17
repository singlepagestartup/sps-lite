import { InputHTMLAttributes, forwardRef } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <input data-ui-variant="text" ref={ref} type={props.type} {...props} />
  );
});

export default TextInput;
