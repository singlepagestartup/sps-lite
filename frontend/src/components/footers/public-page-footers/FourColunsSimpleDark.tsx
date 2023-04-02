import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { BACKEND_URL } from "~utils/envs";
import ButtonsArrays from "~components/buttons/buttons-arrays";
import { IPublicPageFooterBlock } from ".";

export default function FourColumnsSimpleDark(props: IPublicPageFooterBlock) {
  const {
    buttonsArrays,
    socialNetworksButtons,
    description,
    logotype,
    policiesButtons,
  } = props;

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
                  {logotype?.media?.length ? (
                    <Image
                      src={getImageUrl(logotype.media[0], { BACKEND_URL })}
                      alt=""
                      className="object-contain object-top object-left"
                      width={200}
                      height={200}
                    />
                  ) : null}
                </div>
              </div>
              {description ? (
                <ReactMarkdown className="text-xs text-gray-300">
                  {description}
                </ReactMarkdown>
              ) : null}
            </div>

            {/* Sitemap sections */}
            <div className="w-3/5 flex justify-end gap-4">
              {buttonsArrays?.map((buttonsArray, index) => {
                return <ButtonsArrays key={index} {...buttonsArray} />;
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-8 md:flex md:items-center md:justify-between">
          {props.copyrights ? (
            <ReactMarkdown className="text-sm text-gray-300">
              {props.copyrights}
            </ReactMarkdown>
          ) : null}
          <div className="flex space-x-6 md:order-2">
            {socialNetworksButtons?.map((buttonsArray, index) => {
              return <ButtonsArrays key={index} {...buttonsArray} />;
            })}
            {policiesButtons?.map((buttonsArray, index) => {
              return <ButtonsArrays key={index} {...buttonsArray} />;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
