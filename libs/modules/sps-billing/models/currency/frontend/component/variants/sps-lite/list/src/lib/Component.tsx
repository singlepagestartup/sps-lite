import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-billing"
      data-model="currency"
      data-variant={props.variant}
      className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8 items-start"
    >
      Currency
    </div>
  );
}
