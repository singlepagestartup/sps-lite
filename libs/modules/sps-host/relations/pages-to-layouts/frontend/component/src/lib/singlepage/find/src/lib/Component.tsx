import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-host"
      data-relation="pages-to-layouts"
      data-variant={props.variant}
      className="w-full py-10 text-center flex flex-col gap-1"
    >
      <p className="font-bold">Generated variant</p>
      <p className="font-bold text-4xl">Relation: pages-to-layouts</p>
      <p className="font-bold text-4xl">Variant: find</p>
    </div>
  );
}
