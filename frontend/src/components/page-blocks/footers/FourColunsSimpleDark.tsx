import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { IFooter } from "types";
import { BACKEND_URL } from "~utils/envs";

export default function FourColumnsSimpleDark(props: IFooter) {
  const { buttonsArrays, socialNetworksButtons, description, logo } = props;

  return (
    <footer
      aria-labelledby="footer-heading"
      className="border-t border-gray-200 bg-gray-800"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20">
          <div className="w-full flex items-row justify-between gap-4">
            {/* Image section */}
            <div className="w-1/5">
              <div className="w-6/12 mb-5">
                <div className="relative w-full">
                  <Image
                    src={getImageUrl(logo, { BACKEND_URL })}
                    alt=""
                    className="object-contain object-top object-left"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <ReactMarkdown className="text-xs text-gray-300">
                {description}
              </ReactMarkdown>
            </div>

            {/* Sitemap sections */}
            <div className="w-3/5 flex justify-end gap-4">
              {buttonsArrays.map((buttonArray, index) => {
                return (
                  <div key={index} className="w-full">
                    <h3 className="text-sm font-medium text-gray-50">
                      {buttonArray.title}
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {buttonArray.buttons.map((button, bIndex) => (
                        <li key={bIndex} className="text-sm">
                          <Link
                            href={button.url}
                            className="text-gray-200 hover:text-gray-300"
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
        </div>

        <div className="border-t border-gray-200 py-8 md:flex md:items-center md:justify-between">
          <ReactMarkdown className="text-sm text-gray-300">
            {props.copyrights}
          </ReactMarkdown>
          <div className="flex space-x-6 md:order-2">
            {socialNetworksButtons.map((buttonsArray, index) => {
              return buttonsArray.buttons.map((button, bIndex) => (
                <a
                  key={bIndex}
                  href={button.url}
                  className="text-gray-50 hover:text-gray-100"
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
      </div>
    </footer>
  );
}
