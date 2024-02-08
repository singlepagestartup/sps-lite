import { forwardRef } from "react";
import { RadioGroup, RadioGroupItem } from "./shadcn";
import useGetShadcnOptionsParams from "../../use-get-shadcn-options-params";
import { Props } from "..";

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { localValue, setLocalValue, getLabelFunction } =
    useGetShadcnOptionsParams(props);

  if (!props.onChange) {
    return <></>;
  }

  return (
    <RadioGroup
      onValueChange={setLocalValue}
      defaultValue={undefined}
      value={localValue}
      className="flex flex-col space-y-1"
      ref={ref}
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
