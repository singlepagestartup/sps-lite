import { ISpsLiteErrorBlock } from ".";

export default function Simple(props: ISpsLiteErrorBlock) {
  return (
    <div
      data-component={props.__component}
      data-variant={props.variant}
      className={`${props.className || ""} bg-white`}
    >
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          ERROR
        </h2>
      </div>
    </div>
  );
}
