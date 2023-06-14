import { useCreateFormRequestMutation } from "~redux/services/backend/models/form-requests";
import { useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Inputs from "~components/inputs";
import { ISpsLiteFormBlock } from ".";
import Buttons from "~components/elements/buttons";
import { useSearchParams } from "next/navigation";
import qs from "qs";
import { ISpsLiteBackendInput } from "types/components/elements/sps-lite";

export interface ISpsLiteFromInput extends ISpsLiteBackendInput {
  initialValue?: any;
}

export default function Simple(props: ISpsLiteFormBlock) {
  const [createFormRequest, { data }] = useCreateFormRequestMutation();
  const searchParams = useSearchParams();
  const searchParamsStringified = searchParams?.toString();

  const methods = useForm<any>({
    mode: "all",
  });

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = methods;

  const watchData = watch();

  useEffect(() => {
    // console.log("🚀 ~ Simple ~ watchData", watchData);
  }, [watchData]);

  useEffect(() => {
    if (data) {
      reset();

      if (typeof props.successCallback === "function") {
        props.successCallback(data);
      }
    }
  }, [data, reset]);

  async function onSubmit(data: any) {
    // console.log("🚀 ~ onSubmit ~ data", data);

    createFormRequest({ data, files: data.files });
  }

  const preparedInputs = useMemo(() => {
    return props.inputs?.map((input, index: number) => {
      const localInput: ISpsLiteFromInput = { ...input };
      let inputName = input.name;
      let isFile = false;

      if (searchParamsStringified) {
        const parsedSearchParams = qs.parse(
          decodeURIComponent(searchParamsStringified),
        );

        if (parsedSearchParams[inputName]) {
          localInput.initialValue = parsedSearchParams[inputName];
        }
      }

      if (["listbox", "radio-group"].includes(input.variant)) {
        inputName = input.multiple
          ? `inputs[${index}].options`
          : `inputs[${index}].option`;
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

      let options;

      if (["listbox", "radio-group"].includes(input.variant)) {
        options = input.options?.map((option: any) => {
          const passOption = { ...option };
          delete passOption.id;

          return passOption;
        });
      } else if (input.type && ["date", "datetime"].includes(input.type)) {
        options = {
          inline: true,
          enableTime: input.type === "datetime",
        };
      }

      return {
        input: localInput,
        inputName,
        isFile,
        options,
      };
    });
  }, [props, searchParamsStringified]);

  return (
    <div
      data-collection-type="form"
      data-variant={props.variant}
      className={props.className || ""}
    >
      <div className="form-container">
        <FormProvider {...methods}>
          {preparedInputs?.map((input, index: number) => {
            return (
              <Inputs
                {...input.input}
                key={index}
                options={input.options}
                name={input.inputName}
                className={input.input?.className || ""}
                defaultValue=""
                by="title"
                rules={{
                  required: {
                    value: input.input?.isRequired,
                    message: "Required field",
                  },
                }}
              />
            );
          })}

          {preparedInputs?.map((input, index: number) => {
            return (
              <Inputs
                {...input}
                key={index}
                variant="text"
                type="text"
                name={`inputs[${index}].key`}
                initialValue={input.input.name}
                defaultValue=""
                by="id"
                className="hidden"
                rules={{
                  required: {
                    value: input.input?.isRequired,
                    message: "Required field",
                  },
                }}
              />
            );
          })}

          <Inputs
            variant="radio-group"
            name="form"
            initialValue={props}
            options={[props]}
            className="hidden"
            by="id"
          />
          <div className="submit-button-container">
            <Buttons
              {...props.button}
              variant={props.button?.variant || "secondary"}
              onClick={handleSubmit(onSubmit)}
              title={props.button?.title || "Submit"}
            />
          </div>
        </FormProvider>
      </div>
    </div>
  );
}
