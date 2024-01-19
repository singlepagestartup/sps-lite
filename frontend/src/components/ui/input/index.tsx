import React, {
  HTMLInputTypeAttribute,
  MutableRefObject,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { IEntity as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";
import { useController, useFormContext } from "react-hook-form";
import TextInput from "./text";
import { useTranslationsContext } from "~hooks/use-translations/TranslationsContext";
import useGetFilteredInputProps from "./use-get-filtered-input-props";
import RadioGroupInput from "./radio-group";
import SelectInput from "./select";
import RangeInput from "./range";
import CheckboxInput from "./checkbox";
import DateInput from "./date";

const inputs: {
  [key in HTMLInputTypeAttribute]+?: React.FC<any>;
} = {
  text: TextInput,
  number: TextInput,
  radio: RadioGroupInput,
  select: SelectInput,
  range: RangeInput,
  checkbox: CheckboxInput,
  date: DateInput,
};

export interface Props {
  type: keyof typeof inputs;
  label?: string;
  name: string;
  placeholder?: string;
  defaultValue?: any;
  disabled?: boolean;
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
  extraMedia?: IBackendFile[] | null;
  className?: string;
  rules?: any;
  initialValue?: any;
  valueAsNumber?: boolean;
  step?: number;
  min?: number;
  max?: number;
  multiple?: boolean;
  ui: "sps" | "shadcn";
  options?: any;
}

// export interface IInputProps
//   extends Omit<UseControllerProps, "name">,
//     React.InputHTMLAttributes<HTMLInputElement> {
//   // label?: string;
//   options?: any;
//   ButtonComp?: any;
//   index?: number;
//   // name: string;
//   OptionComp?: any;
//   // placeholder?: string;
//   initialValue?: any;
//   multiple?: boolean;
//   accept?: string;
//   by?: string;
//   className?: string;
//   inputConfig?: any;
//   parentKey?: string;
//   // defaultValue?: any;
//   baseKey?: string;
//   inputs?: any;
//   rules?: any;
//   // type?: HTMLInputTypeAttribute;
//   rows?: number;
//   removeButtonTitle?: string;
//   addButtonTitle?: string;
//   renderOptionValue?: (option: any) => string;
//   valueAsNumber?: boolean;
//   InsideComponent?: FC<IInsideComponentProps>;
//   step?: number;
//   min?: number;
//   max?: number;
//   // disabled?: boolean;
//   // media?: IBackendFile[] | null;
//   // additionalMedia?: IBackendFile[] | null;
//   // extraMedia?: IBackendFile[] | null;
//   ResetIcon?: any;
//   CalendarIcon?: any;
//   onAppend?: ({ fieldIndex }: { fieldIndex: number }) => any;
//   onRemove?: ({ fieldIndex }: { fieldIndex: number }) => any;
//   onChange?: <T>(e: React.ChangeEvent<T>) => ChangeEventHandler<T> | undefined;
//   reset?: any;
//   variant:
//     | "text"
//     | "listbox"
//     | "radio-group"
//     | "switch"
//     | "file"
//     | "repeatable"
//     | "range"
//     | "date";
//   // [key: string]: any;
// }

type RequiredInputProps = Props & {
  ui: "sps" | "shadcn";
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  onBlur: () => void;
  "data-ui": "input";
  value: any;
  placeholder?: string;
};

export type ExtendedInputProps<T> = RequiredInputProps &
  (T extends "select" ? { options: any } : { options?: any });

const Input = forwardRef<HTMLInputElement, Props>((props, passedRef) => {
  const {
    label,
    name,
    rules,
    placeholder,
    initialValue,
    type = "text",
    valueAsNumber,
  } = props;

  const inputRef: MutableRefObject<
    HTMLInputElement | HTMLTextAreaElement | null
  > = useRef(null);
  const translate = useTranslationsContext();

  const translatedLabel = useMemo(() => {
    return typeof translate === "function" && label ? translate(label) : label;
  }, [label]);

  const translatedPlaceholder = useMemo(() => {
    return typeof translate === "function" && placeholder
      ? translate(placeholder)
      : placeholder;
  }, [placeholder, translate]);

  const additionalAttributes: Pick<Props, "step" | "min" | "max" | "multiple"> =
    useMemo(() => {
      return {
        step: props.step,
        min: props.min,
        max: props.max,
        multiple: props.multiple,
      };
    }, [props]);

  const { control, setValue } = useFormContext();

  const getDefaultValue = (props: Props) => {
    if (props.type === "select") {
      if (props.multiple) {
        return [];
      }

      return "";
    }

    if (props.type === "range") {
      return [props.min || 0];
    }

    if (props.type === "radio") {
      return "";
    }

    return "";
  };

  const {
    field: { onChange, ref, value, onBlur },
  } = useController({
    name,
    control,
    rules,
    defaultValue: getDefaultValue(props),
  });

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
    } else if (["checkbox"].includes(type)) {
      if (
        initialValue !== undefined &&
        initialValue !== "" &&
        inputRef?.current
      ) {
        const evt = new Event("change");
        inputRef.current.value = initialValue;
        inputRef.current.dispatchEvent(evt);
        onChange(evt);
      }
    } else if (["date"].includes(type)) {
      //
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

    onChange(e);
  };

  const toComponentProps: ExtendedInputProps<keyof typeof inputs> = {
    ...passProps,
    "data-ui": "input",
    ui: props.ui,
    label: translatedLabel,
    onChange: passedOnChange,
    id: htmlNodeId,
    onBlur: onBlur,
    value: value ?? "",
    placeholder: translatedPlaceholder,
    ...additionalAttributes,
  };

  if (props.type === "text") {
    return <TextInput {...toComponentProps} />;
  }

  if (props.type === "select") {
    return <SelectInput {...toComponentProps} options={props.options ?? []} />;
  }

  if (props.type === "range") {
    return <RangeInput {...toComponentProps} />;
  }

  if (props.type === "radio") {
    return <RadioGroupInput {...toComponentProps} />;
  }

  if (props.type === "checkbox") {
    return <CheckboxInput {...toComponentProps} />;
  }

  if (props.type === "date") {
    return <DateInput {...toComponentProps} />;
  }

  // return (
  //   <Comp
  //     {...passProps}
  //     data-ui="input"
  //     type={props.type}
  //     valueAsNumber={props.valueAsNumber}
  //     disabled={disabled}
  //     label={translatedLabel}
  //     onChange={passedOnChange}
  //     id={htmlNodeId}
  //     onBlur={onBlur}
  //     value={value ?? ""}
  //     // ref={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //     //   if (e) {
  //     //     ref(e);
  //     //     inputRef.current = e;
  //     //   }
  //     // }}
  //     placeholder={translatedPlaceholder}
  //     {...additionalAttributes}
  //   />
  // );
});

export default Input;
