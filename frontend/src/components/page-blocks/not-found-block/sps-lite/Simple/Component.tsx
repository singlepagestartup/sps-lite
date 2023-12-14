import Button from "~components/elements/button";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { IPageBlock } from "../..";

export default function Component(props: IPageBlock) {
  return (
    <div className="mx-auto max-w-max min-h-[90vh] bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <main className="sm:flex">
        {props.title ? (
          <ReactMarkdown className="text-4xl font-bold tracking-tight text-primary-600 sm:text-5xl">
            {props.title}
          </ReactMarkdown>
        ) : null}
        <div className="sm:ml-6">
          <div className="sm:border-l sm:border-gray-200 sm:pl-6">
            {props.subtitle ? (
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                <ReactMarkdown>{props.subtitle}</ReactMarkdown>
              </h1>
            ) : null}
            {props.description ? (
              <ReactMarkdown className="mt-1 text-base text-gray-500">
                {props.description}
              </ReactMarkdown>
            ) : null}
          </div>
          <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            {props.buttons?.map((button, index) => {
              return <Button key={index} {...button} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
