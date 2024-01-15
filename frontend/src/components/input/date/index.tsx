import { IInputProps } from "~components/ui/input";
import Calendar from "~components/ui/input/calendar";

export default function DateInput(props: IInputProps) {
  return <Calendar {...props} />;
}
