import { IComponentProps } from "../../interface";

export function Skeleton(props: IComponentProps) {
  return (
    <div className="h-16 p-2 w-full flex items-center justify-between">
      <div className="w-1/3 flex justify-between items-center">
        <div className="w-32 lg:ml-6 h-6 skeleton"></div>
        <div className="w-32 lg:ml-6 h-6 skeleton"></div>
        <div className="w-32 lg:ml-6 h-6 skeleton"></div>
      </div>
      <div className="w-40 h-10 skeleton"></div>
      <div className="w-1/3 flex justify-between items-center">
        <div className="w-32 lg:ml-6 h-6 skeleton"></div>
        <div className="w-32 lg:ml-6 h-6 skeleton"></div>
        <div className="w-32 lg:ml-6 h-6 skeleton"></div>
      </div>
    </div>
  );
}
