import { IPageBlock } from "../..";

export default function Skeleton(props: IPageBlock) {
  return (
    <footer className="bg-white mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="flex flex-col lg:flex-row">
        <div className="space-y-8 xl:col-span-1">
          <div className="w-[200px] h-[50px] skeleton"></div>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 xl:col-span-2 xl:mt-0 lg:ml-auto">
          <div className="w-full flex flex-col gap-3">
            <div className="w-32 h-6 skeleton"></div>
            <div className="w-32 h-6 skeleton"></div>
            <div className="w-32 h-6 skeleton"></div>
          </div>

          <div className="w-full flex flex-col gap-3">
            <div className="w-32 h-6 skeleton"></div>
            <div className="w-32 h-6 skeleton"></div>
            <div className="w-32 h-6 skeleton"></div>
          </div>

          <div className="w-full flex flex-col gap-3">
            <div className="w-32 h-6 skeleton"></div>
            <div className="w-32 h-6 skeleton"></div>
            <div className="w-32 h-6 skeleton"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
