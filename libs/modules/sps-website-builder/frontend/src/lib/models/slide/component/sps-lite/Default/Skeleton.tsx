import { IComponentProps } from "./interface";

export function Skeleton(props: IComponentProps) {
  return (
    <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8 flex flex-col gap-4">
      <div className="w-5/12 h-12 skeleton mb-8"></div>
    </div>
  );
}
