import { UseFormReturn } from "react-hook-form";
import { TTypedProps } from "../input/interface";

type TUniversalProps = {
  ui: "shadcn" | "sps";
  label?: string;
  name: string;
  placeholder?: string;
  form: UseFormReturn<any>;
  className?: string;
  inputClassName?: string;
  disabled?: boolean;
};

export type IComponentProps = TUniversalProps & TTypedProps;
