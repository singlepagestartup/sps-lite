import { forwardRef } from "react";
import { IInputProps } from "../..";

const Input = forwardRef<HTMLInputElement, IInputProps>((props, passedRef) => {
  return <div className="w-full bg-red-500 p-5"></div>;
});

export default Input;
