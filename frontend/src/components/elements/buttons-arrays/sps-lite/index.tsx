import ColumnWithTitle from "./ColumnWithTitle";
import { FC } from "react";
import { ISpsLiteBackendButtonsArray } from "types/components/elements/sps-lite";
import Row from "./Row";

export interface IButtonsArray
  extends Omit<
    ISpsLiteBackendButtonsArray,
    "id" | "description" | "className" | "__component"
  > {
  description?: string | null;
  className?: string | null;
  onClick?: any;
  __component?: ISpsLiteBackendButtonsArray["__component"];
}

export const variants = {
  "column-with-title": ColumnWithTitle,
  row: Row,
};

export default function ButtonsArrays(props: IButtonsArray) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IButtonsArray>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
