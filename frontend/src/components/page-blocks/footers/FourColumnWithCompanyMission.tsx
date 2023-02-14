import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { IFooter } from "types";
import { BACKEND_URL } from "~utils/envs";

export default function FourColumnWithCompanyMission(props: IFooter) {
  const { buttonsArrays, socialNetworksButtons, description, logo } = props;

  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="space-y-8 xl:col-span-1">
            <Image
              src={getImageUrl(logo, { BACKEND_URL })}
              alt=""
              className="object-contain object-top object-left"
              width={200}
              height={200}
            />
            <ReactMarkdown className="text-xs text-gray-300">
              {description}
            </ReactMarkdown>
            <div className="flex space-x-6">
              {socialNetworksButtons.map((buttonsArray, index) => {
                return buttonsArray.buttons.map((button, bIndex) => (
                  <a
                    key={bIndex}
                    href={button.url}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">{button.title}</span>
                    {button.icon ? (
                      <div className="relative w-6 h-6">
                        <Image
                          src={getImageUrl(button.icon, { BACKEND_URL })}
                          alt=""
                          className="object-contan"
                          fill={true}
                        />
                      </div>
                    ) : null}
                  </a>
                ));
              })}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 xl:col-span-2 xl:mt-0 lg:ml-auto">
            {buttonsArrays.map((buttonArray, index) => {
              return (
                <div key={index} className="w-full">
                  <h3 className="text-sm font-medium text-gray-900 text-center md:text-left">
                    {buttonArray.title}
                  </h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {buttonArray.buttons.map((button, bIndex) => (
                      <li
                        key={bIndex}
                        className="text-sm text-center md:text-left"
                      >
                        <Link
                          href={button.url}
                          className="text-gray-500 hover:text-gray-600"
                        >
                          {button.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <ReactMarkdown className="text-sm text-gray-500">
            {props.copyrights}
          </ReactMarkdown>
        </div>
      </div>
    </footer>
  );
}
