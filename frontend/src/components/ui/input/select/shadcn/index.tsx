import { forwardRef } from "react";
import { IInputProps } from "../..";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./shadcn";
import useGetShadcnOptionsParams from "../../use-get-shadcn-options-params";

const Input = forwardRef<HTMLInputElement, IInputProps>((props, passedRef) => {
  const { localValue, setLocalValue, getLabelFunction } =
    useGetShadcnOptionsParams(props);

  if (!props.onChange) {
    return <></>;
  }

  return (
    <Select
      onValueChange={setLocalValue}
      defaultValue={undefined}
      value={localValue}
    >
      <SelectTrigger>
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
      <SelectContent>
        {props.options?.map((option: any, index: number) => {
          const value = getLabelFunction(option);
          const renderValue = props.renderOptionValue || getLabelFunction;

          return (
            <SelectItem key={index} value={value}>
              {renderValue(option)}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
});

export default Input;
