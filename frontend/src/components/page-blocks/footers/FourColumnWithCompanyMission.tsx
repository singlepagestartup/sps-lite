import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { BACKEND_URL } from "~utils/envs";
import ButtonsArrays from "~components/buttons/buttons-arrays";
import { IFooterBlock } from ".";

export default function FourColumnWithCompanyMission(props: IFooterBlock) {
  const {
    buttonsArrays,
    socialNetworksButtons,
    description,
    logo,
    policiesButtons,
  } = props;

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
            {description ? (
              <ReactMarkdown className="text-xs text-gray-300">
                {description}
              </ReactMarkdown>
            ) : null}
            <div className="flex space-x-6">
              {socialNetworksButtons?.map((buttonsArray, index) => {
                return <ButtonsArrays key={index} {...buttonsArray} />;
              })}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 xl:col-span-2 xl:mt-0 lg:ml-auto">
            {buttonsArrays?.map((buttonsArray, index) => {
              return <ButtonsArrays key={index} {...buttonsArray} />;
            })}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-row items-center justify-between">
          {props.copyrights ? (
            <ReactMarkdown className="text-sm text-gray-500">
              {props.copyrights}
            </ReactMarkdown>
          ) : null}
          {policiesButtons?.map((buttonsArray, index) => {
            return <ButtonsArrays key={index} {...buttonsArray} />;
          })}
        </div>
      </div>
    </footer>
  );
}
