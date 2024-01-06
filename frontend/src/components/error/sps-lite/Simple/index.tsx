import { IError } from "~components/error";

export default function Simple(props: IError) {
  return (
    <div className="w-full p-10 border border-red-300 border-dashed text-center">
      <p className="text-red-600">{props.error?.message}</p>
    </div>
  );
}
