import React, {
  ChangeEventHandler,
  FC,
  HTMLInputTypeAttribute,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { IEntity as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";
import {
  UseControllerProps,
  useController,
  useFormContext,
} from "react-hook-form";
import { IInsideComponentProps } from "./repeatable";
import TextInput from "./text";
import { useTranslationsContext } from "~hooks/use-translations/TranslationsContext";
import useGetFilteredInputProps from "./use-get-filtered-input-props";
import RadioGroupInput from "./radio-group";
import SelectInput from "./select";
import RangeInput from "./range";

export interface IInputProps
  extends Omit<UseControllerProps, "name">,
    React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  options?: any;
  ButtonComp?: any;
  index?: number;
  name: string;
  OptionComp?: any;
  placeholder?: string;
  initialValue?: any;
  multiple?: boolean;
  accept?: string;
  by?: string;
  className?: string;
  inputConfig?: any;
  parentKey?: string;
  defaultValue?: any;
  baseKey?: string;
  inputs?: any;
  rules?: any;
  type?: HTMLInputTypeAttribute;
  rows?: number;
  removeButtonTitle?: string;
  addButtonTitle?: string;
  renderOptionValue?: (option: any) => string;
  valueAsNumber?: boolean;
  InsideComponent?: FC<IInsideComponentProps>;
  step?: number | string;
  min?: number | string;
  max?: number | string;
  disabled?: boolean;
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
  extraMedia?: IBackendFile[] | null;
  ResetIcon?: any;
  CalendarIcon?: any;
  onAppend?: ({ fieldIndex }: { fieldIndex: number }) => any;
  onRemove?: ({ fieldIndex }: { fieldIndex: number }) => any;
  onChange?: <T>(e: React.ChangeEvent<T>) => ChangeEventHandler<T> | undefined;
  reset?: any;
  variant:
    | "text"
    | "listbox"
    | "radio-group"
    | "switch"
    | "file"
    | "repeatable"
    | "range"
    | "date";
  [key: string]: any;
}

const inputs: {
  [key: string]: FC<HTMLInputElement & IInputProps & any>;
} = {
  text: TextInput,
  number: TextInput,
  radio: RadioGroupInput,
  select: SelectInput,
  range: RangeInput,
};

const Input = forwardRef<HTMLInputElement, IInputProps>((props, passedRef) => {
  const {
    label,
    name,
    rules,
    shouldUnregister,
    defaultValue,
    placeholder,
    className,
    initialValue,
    type = "text",
    rows,
    valueAsNumber,
    step,
    min,
    max,
    disabled,
    ResetIcon,
  } = props;

  const Comp = props.type ? inputs[props.type] : "input";

  const inputRef = useRef<HTMLInputElement | null>(null);
  const translate = useTranslationsContext();

  const translatedLabel = useMemo(() => {
    return typeof translate === "function" && label ? translate(label) : label;
  }, [label]);

  const [additionalAttributes, setAdditionalAttributes] = useState<{
    step?: number;
    min?: number;
    max?: number;
  }>({});

  const { control, setValue } = useFormContext();

  const getDefaultValue = (props: IInputProps) => {
    if (props.type === "select") {
      if (props.multiple) {
        return [];
      }

      return "";
    }

    if (props.type === "radio") {
      return "";
    }

    if (props.type === "range") {
      return 0;
    }

    return "";
  };

  const {
    field: { onChange, ref, value, onBlur },
  } = useController({
    name,
    control,
    rules,
    shouldUnregister,
    defaultValue: getDefaultValue(props),
  });

  useEffect(() => {
    if (type === "range") {
      if (step && step !== additionalAttributes.step) {
        setAdditionalAttributes((prev) => {
          return {
            ...prev,
            step:
              step !== undefined && step !== null
                ? typeof step === "string"
                  ? parseInt(step)
                  : step
                : undefined,
          };
        });
      }
      return;
    }

    setAdditionalAttributes({
      step:
        step !== undefined && step !== null
          ? typeof step === "string"
            ? parseInt(step)
            : step
          : undefined,
      min:
        min !== undefined && min !== null
          ? typeof min === "string"
            ? parseInt(min)
            : min
          : undefined,
      max:
        max !== undefined && max !== null
          ? typeof max === "string"
            ? parseInt(max)
            : max
          : undefined,
    });
  }, [JSON.stringify(props)]);

  const additionalProps = useMemo(() => {
    if (props.multiple) {
      return { multiple: true };
    }

    return {};
  }, [props.multiple]);

  const htmlNodeId = useMemo(() => {
    return name.replace(/\[/g, "_").replace(/\]/g, "_").replace(/\./g, "_");
  }, [name]);

  useEffect(() => {
    if (["text", "range"].includes(type)) {
      if (initialValue !== undefined && inputRef?.current) {
        const evt = new Event("change");
        inputRef.current.value = initialValue;
        inputRef.current.dispatchEvent(evt);
        const target = evt.target as HTMLInputElement | HTMLTextAreaElement;

        if (valueAsNumber) {
          onChange(+target?.value);
          return;
        }

        if (
          target.value === "" &&
          (type === "date" || type === "datetime-local")
        ) {
          onChange(null);
        } else {
          onChange(evt);
        }
      }
    } else if (["select", "radio"].includes(type)) {
      if (initialValue !== undefined && inputRef?.current) {
        const evt = new Event("change");
        inputRef.current.value = initialValue;
        inputRef.current.dispatchEvent(evt);
        onChange(evt);
      }
    }
  }, [JSON.stringify(initialValue), inputRef?.current]);

  /**
   * If using in repeatable component
   * useForm set {} as value of input
   * and validation required skips that
   * fiels.
   */
  useEffect(() => {
    if (props.type === "select" && JSON.stringify(value) === "{}") {
      setValue(name, undefined);
    }
  }, [JSON.stringify(value)]);

  const passProps = useGetFilteredInputProps(props);

  const passedOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (valueAsNumber) {
      onChange(+e.target.value);
      return;
    }

    if (type === "date") {
      const preparedDate = e.target.value === "" ? null : e.target.value;

      onChange(preparedDate);
      return;
    }

    onChange(e);
  };

  return (
    <Comp
      {...passProps}
      data-ui="input"
      type={valueAsNumber ? "number" : type || "text"}
      disabled={disabled}
      label={translatedLabel}
      onChange={passedOnChange}
      id={htmlNodeId}
      onBlur={onBlur}
      value={value !== undefined ? value : ""}
      ref={(e) => {
        if (e) {
          ref(e);
          inputRef.current = e;
        }
      }}
      placeholder={
        typeof translate === "function" && placeholder
          ? translate(placeholder)
          : placeholder
      }
      {...additionalAttributes}
      {...additionalProps}
    />
  );
});

export default Input;
