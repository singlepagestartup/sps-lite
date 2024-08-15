import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="website-builder"
      data-relation="widgets-to-logotypes"
      data-variant={props.variant}
      className="w-full py-10 text-center flex flex-col gap-1"
    >
      <p className="font-bold">Generated variant</p>
      <p className="font-bold text-4xl">Relation: widgets-to-logotypes</p>
      <p className="font-bold text-4xl">Variant: find</p>
    </div>
  );
}
