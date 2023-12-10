import { api as formRequestApi } from "~redux/services/backend/api/form-request/api";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Inputs from "~components/inputs";
import { ISpsLiteFormBlock } from ".";
import Buttons from "~components/elements/buttons";
import useGetPreparedFormInputs from "~hooks/use-get-prepared-form-inputs";

export default function Simple(props: ISpsLiteFormBlock) {
  const [createFormRequest, { data }] = formRequestApi.useCreateMutation();
  const preparedInputs = useGetPreparedFormInputs(props);

  const methods = useForm<any>({
    mode: "all",
  });

  const {
    register,
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
