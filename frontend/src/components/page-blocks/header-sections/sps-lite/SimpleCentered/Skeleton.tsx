import { IPageBlock } from "../..";

export default function Skeleton(props: IPageBlock) {
  return (
    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-col items-center py-16">
        <div className="w-24 h-5 skeleton"></div>
        <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl w-fit">
          <div className="w-40 h-8 skeleton"></div>
        </h2>
        <div className="flex justify-center flex-col gap-2">
          <div className="w-6/12 h-4 skeleton"></div>
          <div className="w-4/12 h-4 skeleton"></div>
        </div>
      </div>
    </div>
  );
}
