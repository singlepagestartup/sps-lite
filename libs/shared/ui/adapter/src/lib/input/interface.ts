import { ReactNode } from "react";
import { ControllerRenderProps } from "react-hook-form";

type TRenderComponent = ReactNode | ((props: any) => ReactNode);

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
      options: [value: string, title: string | TRenderComponent][];
    };

export type IComponentProps = IUniversalProps & TTypedProps;
