import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-rbac"
      data-model="role"
      data-variant={props.variant}
      className="bg-white mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
    ></div>
  );
}
