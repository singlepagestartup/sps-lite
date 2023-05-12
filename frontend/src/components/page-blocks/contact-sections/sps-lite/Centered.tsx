import { ISpsLiteContactSectonBlock } from ".";
import Forms from "~components/forms";

export default function Centered(props: ISpsLiteContactSectonBlock) {
  return (
    <div
      data-component={props.__component}
      data-variant={props.variant}
      className={`${
        props.className || ""
      } overflow-hidden bg-white py-16 px-6 lg:px-8 lg:py-24`}
    >
      <div className="relative mx-auto max-w-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {props.title}
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            {props.description}
          </p>
        </div>
        <div className="mt-12">
          {props.form ? <Forms {...props.form} /> : null}
        </div>
      </div>
    </div>
  );
}
