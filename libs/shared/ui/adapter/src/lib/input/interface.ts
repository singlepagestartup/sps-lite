import { LegacyRef, ReactNode } from "react";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";

type TRenderComponent = ReactNode | ((props: any) => ReactNode);

type IUniversalProps = {
  field: ControllerRenderProps<any, string>;
  placeholder?: string;
  label?: string;
  ref?: LegacyRef<HTMLInputElement>;
  form: UseFormReturn<any>;
  className?: string;
};

export type TTypedProps =
  | {
      type: "text";
    }
  | {
      type: "password";
    }
  | {
      type: "tiptap";
    }
  | {
      type: "textarea";
    }
  | {
      type: "file";
    }
  | {
      type: "number";
    }
  | {
      type: "datetime";
    }
  | {
      type: "radio" | "select";
      options: [value: string, title: string | TRenderComponent][];
    };

export type IComponentProps = IUniversalProps & TTypedProps;
