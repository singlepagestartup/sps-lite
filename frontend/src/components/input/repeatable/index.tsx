import { IInputProps } from "~components/ui/input";
import RepeatableInput from "~components/ui/input/repeatable";

export default function Input(props: IInputProps) {
  return <RepeatableInput {...props} />;
}
