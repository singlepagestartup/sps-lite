import { useCreateFormRequestMutation } from "~redux/services/backend/models/form-requests";
import { useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Inputs from "~components/inputs";
import { ISpsLiteFormBlock } from ".";
import Buttons from "~components/elements/buttons";

export default function Simple(props: ISpsLiteFormBlock) {
  const [createFormRequest, { data }] = useCreateFormRequestMutation();

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
    // console.log(`🚀 ~ Simple ~ watchData`, watchData);
  }, [watchData]);

  useEffect(() => {
    if (data) {
      reset();
    }
  }, [data, reset]);

  async function onSubmit(data: any) {
    // console.log(`🚀 ~ onSubmit ~ data`, data);
    // const componentsData = prepareDataForComponent({
    //   data,
    //   inputs: props.form.inputs,
    // });

    // const passData = {
    //   inputs: componentsData,
    // };

    // console.log(`🚀 ~ onSubmit ~ setDataToComponent ~ res`, res);

    createFormRequest({ data, files: data.files });
  }

  const preparedInputs = useMemo(() => {
    return props.inputs?.map((input, index: number) => {
      let inputName = input.name;
      let isFile = false;

      if (["listbox", "radio-group"].includes(input.component)) {
        inputName = input.multiple
          ? `inputs[${index}].options`
          : `inputs[${index}].option`;
      } else if (["switch"].includes(input.component)) {
        inputName = `inputs[${index}].is_true`;
      } else if (["file"].includes(input.component)) {
        inputName = `inputs[${index}].files`;
        isFile = true;
      } else {
        inputName = `inputs[${index}].value`;
      }

      const options = input.options?.map((option: any) => {
        const passOption = { ...option };
        delete passOption.id;

        return passOption;
      });

      return {
        input,
        inputName,
        isFile,
        options,
      };
    });
  }, [props]);

  return (
    <div className={props.className || ""}>
      <div className="form__container">
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
                component="text"
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
            component="radio-group"
            name="form"
            initialValue={props}
            options={[props]}
            className="hidden"
            by="id"
          />
          <div className="submit__button_container">
            <Buttons
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
