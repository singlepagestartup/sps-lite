import Calendar from "~components/ui/input/calendar";
import { IElement } from "../..";

export default function DateInput(props: IElement) {
  return <Calendar data-component="elements.input" {...props} />;
}
