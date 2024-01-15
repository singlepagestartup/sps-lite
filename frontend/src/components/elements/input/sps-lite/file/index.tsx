import FileInput from "~components/ui/input/file";
import { IElement } from "../..";

export default function File(props: IElement) {
  return <FileInput data-component="elements.input" {...props} />;
}
