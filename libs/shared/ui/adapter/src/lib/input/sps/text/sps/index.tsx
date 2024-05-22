import { InputHTMLAttributes, forwardRef, useEffect, useRef } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  setLocalRef?: any;
}

const TextInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const formInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (props.setLocalRef) {
      props.setLocalRef(formInputRef);
    }
  }, [formInputRef]);

  return (
    <input
      data-ui="input"
      data-ui-variant="text"
      className={props.className || ""}
      ref={formInputRef}
      type={props.type}
      id={props.id}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      placeholder={props.placeholder}
    />
  );
});

export default TextInput;
