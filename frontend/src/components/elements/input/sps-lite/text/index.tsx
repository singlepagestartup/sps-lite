import Text from "~components/ui/input/text";
import { IElement } from "../..";

export default function TextInput(props: IElement) {
  return <Text data-component="elements.input" {...props} />;
}
