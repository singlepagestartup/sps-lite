"use client";

import { useEffect, useState } from "react";

export default function useGetShadcnOptionsParams(props: any) {
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

  return {
    localValue,
    setLocalValue,
    getLabelFunction,
  };
}
