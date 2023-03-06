import { Switch } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";
import { useController, useFormContext } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import { getInputErrors } from "~utils/forms";
import { IInputProps } from "..";

export default function SwitchInput(props: IInputProps) {
  const {
    label,
    name,
    rules,
    shouldUnregister,
    defaultValue = false,
    initialValue = false,
    className,
    translate,
  } = props;

  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const {
    field: { onChange, ref, value, onBlur },
  } = useController({
    name,
    control,
    rules,
    shouldUnregister,
    defaultValue,
  });

  useEffect(() => {
    if (
      initialValue !== undefined &&
      initialValue !== `` &&
      inputRef?.current
    ) {
      const evt = new Event(`change`);
      inputRef.current.value = initialValue;
      inputRef.current.dispatchEvent(evt);
      onChange(evt);
    }
  }, [initialValue, inputRef?.current]);

  const inputError = getInputErrors(errors)(name);

  useEffect(() => {
    // console.log(`🚀 ~ TextWithControlled ~ props`, props);
    // console.log(`🚀 ~ useEffect ~ errors`, errors);
  }, [errors]);

  return (
    <div className={className}>
      <div className="switch__input">
        <Switch
          as="div"
          // role="button"
          checked={value !== undefined && value !== `` ? value : false}
          onChange={onChange}
          id={name}
          ref={(e: any) => {
            if (e) {
              ref(e);
              inputRef.current = e;
            }
          }}
        >
          <div role="tablist">
            <div
              aria-selected={
                value !== undefined && value !== `` ? value : false
              }
              role="tab"
              className="check"
            >
              {value ? <CheckIcon className="checked" /> : null}
            </div>
          </div>
        </Switch>
        <div className="label">
          <label htmlFor={name}>
            {label ? (
              <ReactMarkdown>
                {typeof translate === `function` ? translate(label) : label}
              </ReactMarkdown>
            ) : null}
          </label>
        </div>
      </div>
      {inputError?.message ? (
        <div className="inputs__error">
          <p>
            {typeof translate === `function`
              ? translate(inputError.message)
              : inputError.message}
          </p>
        </div>
      ) : null}
    </div>
  );
}
