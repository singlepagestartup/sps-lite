import ReactMarkdown from "react-markdown";
import { IBackendPublicPageBlock } from "..";
import SimpleButtons from "~components/buttons/simple-buttons";

export default function Simple(props: IBackendPublicPageBlock) {
  return (
    <div className="bg-white w-screen fixed">
      <div className="mx-auto max-w-7xl px-2 flex justify-between py-2 items-center">
        <ReactMarkdown className="text-md text-gray-900 font-medium">
          {props?.title || ``}
        </ReactMarkdown>
        <div className="flex flex-col sm:flex-row gap-2">
          {props.buttons?.map((button, index) => (
            <SimpleButtons key={index} {...button} />
          ))}
        </div>
      </div>
    </div>
  );
}
