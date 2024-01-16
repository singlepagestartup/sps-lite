import { forwardRef } from "react";
import { IInputProps } from "../..";

const TextInput = forwardRef<HTMLInputElement, IInputProps>(
  (props: IInputProps, ref) => {
    return (
      <input data-ui-variant="text" ref={ref} type={props.type} {...props} />
    );
  },
);

export default TextInput;
