import { IComponentPropsExtended, IComponentProps } from "./interface";

export function Component<M extends { id: string }, V>(
  props: IComponentPropsExtended<M, V, IComponentProps<M, V>>,
) {
  return (
    <div
      data-module="website-builder"
      data-model="content-block"
      data-variant={props.variant}
      className="w-full py-10 text-center flex flex-col gap-1"
    >
      <p className="font-bold">Generated variant</p>
      <p className="font-bold text-4xl">Model: content-block</p>
      <p className="font-bold text-4xl">Variant: find</p>
    </div>
  );
}
