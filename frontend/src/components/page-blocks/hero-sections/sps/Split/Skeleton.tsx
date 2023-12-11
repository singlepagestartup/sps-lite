import { IPageBlock } from "../..";

export default function Skeleton(props: IPageBlock) {
  return (
    <div className="flex flex-col items-center justify-between overflow-hidden bg-white mx-auto max-w-7xl relative pt-6 pb-16 w-full">
      <main className="mx-auto mt-16 max-w-2xl lg:max-w-7xl px-4 sm:mt-24 flex justify-center items-center flex-col">
        <div className="w-6/12 h-16 skeleton"></div>

        <div className="w-7/12 h-5 skeleton mt-3 h-200"></div>

        <div className="w-4/12 h-5 skeleton mt-3"></div>
      </main>
    </div>
  );
}
