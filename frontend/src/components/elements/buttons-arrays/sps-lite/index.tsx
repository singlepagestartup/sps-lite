import ColumnWithTitle from "./ColumnWithTitle";
import { FC } from "react";
import Row from "./Row";
import { ISpsLiteBackendButtonsArray } from "~redux/services/backend/components/elements/buttons-array/interfaces/sps-lite";

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
