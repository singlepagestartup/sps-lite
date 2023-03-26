import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ITopbar } from ".";
import { BACKEND_URL } from "~utils/envs";

export default function Simple(props: ITopbar) {
  return (
    <div className="bg-white w-screen">
      <div className="mx-auto max-w-7xl px-2 flex justify-between py-2 items-center">
        <ReactMarkdown className="text-md text-gray-900 font-medium">
          {props?.title || ``}
        </ReactMarkdown>
        <div className="flex flex-col sm:flex-row gap-2">
          {props.buttons?.map((button, index) => (
            <Link
              key={index}
              href={button?.url}
              className="text-gray-400 hover:text-gray-300 flex gap-4 justify-end"
            >
              {button?.icon ? (
                <div className="relative w-6 h-6">
                  <Image
                    src={getImageUrl(button.icon, { BACKEND_URL })}
                    alt=""
                    className="object-contan"
                    fill={true}
                  />
                </div>
              ) : null}
              <span className="">{button?.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
