import ColumnWithTitle from "./ColumnWithTitle";
import Row from "./Row";
import { IComponentProps, IComponentPropsExtended } from "..";

export const variants = {
  "column-with-title": ColumnWithTitle,
  row: Row,
};

export default function SpsLite(
  props: IComponentProps | IComponentPropsExtended,
) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...(props as IComponentPropsExtended)} />;
}
