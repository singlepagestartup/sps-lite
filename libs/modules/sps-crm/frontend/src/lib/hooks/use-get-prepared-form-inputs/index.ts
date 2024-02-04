import { useSearchParams } from "next/navigation";
import QueryString from "qs";
import { useMemo } from "react";
import type { IModelExtended as IForm } from "../../models/form/_model";
import { IModelExtended as IInput } from "../../models/input/_model";

export function useGetPreparedFormInputs(props: IForm) {
  const searchParams = useSearchParams();
  const searchParamsStringified = searchParams?.toString();

  const preparedInputs = useMemo(() => {
    return props.inputs?.map((input, index: number) => {
      const localInput: IInput & { by?: any } = {
        ...input,
        __component: "elements.input",
      };
      let inputName = input.name;
      let isFile = false;

      if (searchParamsStringified) {
        const parsedSearchParams = QueryString.parse(
          decodeURIComponent(searchParamsStringified),
        ); //?

        if (parsedSearchParams[inputName]) {
          if (localInput) {
            // @ts-ignore
            localInput.initialValue = parsedSearchParams[inputName];
          }
        }
      }

      if (["listbox", "radio-group"].includes(input.variant)) {
        inputName = input.multiple
          ? `inputs[${index}].options`
          : `inputs[${index}].option`;
        localInput.by = "title";
      } else if (["switch"].includes(input.variant)) {
        inputName = `inputs[${index}].is_true`;
      } else if (["file"].includes(input.variant)) {
        inputName = `inputs[${index}].files`;
        isFile = true;
      } else if (input.variant === "date") {
        if (input.type && ["date", "date_inline"].includes(input?.type)) {
          inputName = `inputs[${index}].dates[0].date_value`;
        } else {
          inputName = `inputs[${index}].dates[0].datetime_value`;
        }

        if (
          input.type &&
          ["daterange_inline", "datetimerange_inline"].includes(input?.type)
        ) {
          inputName = `inputs[${index}].dates`;
        }
      } else {
        inputName = `inputs[${index}].value`;
      }

      // let options: IInput["options"] = undefined;

      // if (["listbox", "radio-group"].includes(input.variant)) {
      //   options = input.options?.map((option: any) => {
      //     const passOption = { ...option };
      //     delete passOption.id;

      //     return passOption;
      //   });
      // }
      // else if (input.type && ["date", "datetime"].includes(input.type)) {
      //   options = {
      //     inline: true,
      //     enableTime: input.type === "datetime",
      //   };
      // }

      return {
        input: localInput,
        inputName,
        isFile,
        // options,
      };
    });
  }, [props, searchParamsStringified]);

  return preparedInputs;
}
