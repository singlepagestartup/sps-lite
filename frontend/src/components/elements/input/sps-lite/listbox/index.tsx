import ListboxInput from "~components/ui/input/listbox";
import { IElement } from "../..";

export default function Input(props: IElement) {
  return <ListboxInput data-component="elements.input" {...props} />;
}
