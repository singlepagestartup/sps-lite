import { IComponentPropsExtended } from "./interface";

export function Component<M>(props: IComponentPropsExtended<M>) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="hero-section-block"
      data-variant={props.variant}
      className="w-full py-10 text-center flex flex-col gap-1"
    >
      <p className="font-bold">Generated variant</p>
      <p className="font-bold text-4xl">Model: hero-section-block</p>
      <p className="font-bold text-4xl">Variant: find</p>
    </div>
  );
}
