import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-model="elements.slide"
      data-variant="default"
      className="mx-auto max-w-7xl py-16 px-2 lg:px-0"
    >
      <p className="text-4xl font-bold pt-10 pb-2">Slide</p>
    </div>
  );
}
