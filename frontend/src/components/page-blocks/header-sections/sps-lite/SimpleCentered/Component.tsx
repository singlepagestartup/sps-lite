import ReactMarkdown from "react-markdown";
import { IPageBlock } from "../..";

export default function Component(props: IPageBlock) {
  return (
    <div className="bg-white mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        {props.subtitle ? (
          <h2 className="text-lg font-semibold text-primary-600">
            <ReactMarkdown>{props.subtitle}</ReactMarkdown>
          </h2>
        ) : null}
        {props.title ? (
          <ReactMarkdown className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {props.title}
          </ReactMarkdown>
        ) : null}
        {props.description ? (
          <ReactMarkdown className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            {props.description}
          </ReactMarkdown>
        ) : null}
      </div>
    </div>
  );
}
