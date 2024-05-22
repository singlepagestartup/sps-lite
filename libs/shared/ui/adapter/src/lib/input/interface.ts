import { ControllerRenderProps } from "react-hook-form";

type IUniversalProps = {
  field: ControllerRenderProps<any, string>;
  placeholder?: string;
  label?: string;
};

export type TTypedProps =
  | {
      type: "text";
    }
  | {
      type: "radio" | "select";
      options: string[];
    };

export type IComponentProps = IUniversalProps & TTypedProps;
