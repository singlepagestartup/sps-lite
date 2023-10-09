const R = require("ramda");
import { FieldErrors, FieldValues } from "react-hook-form";

interface IFormError {
  message: string;
  type: string;
  root?: IFormError;
}

export function getInputErrors(errors: FieldErrors<FieldValues>) {
  return (field: string) => {
    const errorPath = field.replaceAll("[", ".").replaceAll("]", "").split(".");
    let inputError = R.path(errorPath, errors) as IFormError;

    if (Array.isArray(inputError)) {
      inputError = inputError.root as IFormError;
    }

    if (inputError) {
      return inputError;
    }
  };
}
