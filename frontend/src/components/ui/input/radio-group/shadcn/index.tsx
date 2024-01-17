import { forwardRef, use, useEffect, useState } from "react";
import { IInputProps } from "../..";
import { RadioGroup, RadioGroupItem } from "./shadcn";

const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const [localValue, setLocalValue] = useState<string | undefined>();

  const getLabelFunction = (option: any) => {
    if (props.by) {
      return option[props.by];
    }

    return option;
  };

  useEffect(() => {
    if (props.onChange) {
      const selectedOption = props.options?.find((option: any) => {
        return getLabelFunction(option) === localValue;
      });

      props.onChange(selectedOption);
    }
  }, [localValue]);

  useEffect(() => {
    if (!props.value) {
      setLocalValue("");
      return;
    }

    const propsSelectedOption = props.options?.find((option: any) => {
      return getLabelFunction(option) === getLabelFunction(props.value);
    });

    if (!propsSelectedOption) {
      return;
    }

    const propsSelectedOptionValue = getLabelFunction(propsSelectedOption);

    if (propsSelectedOptionValue !== localValue) {
      setLocalValue(propsSelectedOptionValue);
    }
  }, [props.value]);

  if (!props.onChange) {
    return <></>;
  }

  return (
    <RadioGroup
      onValueChange={setLocalValue}
      defaultValue={undefined}
      value={localValue}
      className="flex flex-col space-y-1"
    >
      {props.options?.map((option: any, index: number) => {
        const value = getLabelFunction(option);
        const renderValue = props.renderOptionValue || getLabelFunction;

        return (
          <div key={index} className="flex items-center space-x-3 space-y-0">
            <RadioGroupItem value={value} id={value} />
            <label htmlFor={value} className="font-normal">
              {renderValue(option)}
            </label>
          </div>
        );
      })}
    </RadioGroup>
  );
});

export default Input;
