import { ComponentProps, forwardRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./shadcn";
import useGetShadcnOptionsParams from "../../use-get-shadcn-options-params";

export interface Props extends ComponentProps<typeof Select> {
  options: any[];
  placeholder?: string;
  onChange?: (value: any) => void;
  renderOptionValue?: (option: any) => string;
}

const Input = forwardRef<HTMLInputElement, Props>((props, passedRef) => {
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
