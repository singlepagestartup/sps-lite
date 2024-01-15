import RangeInput from "~components/ui/input/range";
import { IElement } from "../..";

export default function Input(props: IElement) {
  return <RangeInput data-component="elements.input" {...props} />;
}
