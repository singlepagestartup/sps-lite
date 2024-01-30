import { IPageBlock } from "../..";

export default function Skeleton(props: IPageBlock) {
  return (
    <div className="h-16 p-2 w-full flex items-center justify-between lg:justify-start">
      <div className="w-32 h-10 skeleton"></div>
      <div className="hidden lg:flex">
        <div className="w-32 lg:ml-6 h-6 skeleton"></div>
        <div className="w-32 lg:ml-6 h-6 skeleton"></div>
        <div className="w-32 lg:ml-6 h-6 skeleton"></div>
      </div>
      <div className="w-12 h-12 flex lg:hidden skeleton"></div>
    </div>
  );
}
