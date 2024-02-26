import { InputHTMLAttributes, forwardRef, useRef } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <input data-ui-variant="text" {...props} ref={ref} type={props.type} />
  );
});

export default TextInput;
