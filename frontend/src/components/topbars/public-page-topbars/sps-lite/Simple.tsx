import ReactMarkdown from "react-markdown";
import { ISpsLitePublicPageTopbarBlock } from ".";
import Buttons from "~components/elements/buttons";

export default function Simple(props: ISpsLitePublicPageTopbarBlock) {
  return (
    <div className="bg-white w-screen fixed z-30">
      <div className="mx-auto max-w-7xl px-2 flex justify-between items-center h-8">
        <ReactMarkdown className="text-md text-gray-900 font-medium">
          {props?.title || ``}
        </ReactMarkdown>
        <div className="flex flex-col sm:flex-row gap-2">
          {props.buttons?.map((button, index) => (
            <Buttons key={index} {...button} />
          ))}
        </div>
      </div>
    </div>
  );
}
