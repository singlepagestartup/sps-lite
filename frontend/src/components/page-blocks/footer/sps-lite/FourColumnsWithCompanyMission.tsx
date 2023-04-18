import utils from "@rogwild/next-utils";
const { getImageUrl } = utils.api;
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { BACKEND_URL } from "~utils/envs";
import ButtonsArrays from "~components/elements/buttons-arrays";
import { ISpsLiteFooterBlock } from ".";

export default function FourColumnsWithCompanyMission(
  props: ISpsLiteFooterBlock
) {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="space-y-8 xl:col-span-1">
            {props.logotype?.media?.length ? (
              <Image
                src={getImageUrl(props.logotype.media[0], { BACKEND_URL })}
                alt=""
                className="object-contain object-left"
                width={200}
                height={200}
              />
            ) : null}
            <div className="max-w-xs">
              {props.description ? (
                <ReactMarkdown className="text-xs text-gray-300">
                  {props.description}
                </ReactMarkdown>
              ) : null}
            </div>
            <div className="flex space-x-6">
              {props.extraButtonsArrays?.map((buttonsArray, index) => {
                return <ButtonsArrays key={index} {...buttonsArray} />;
              })}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 xl:col-span-2 xl:mt-0 lg:ml-auto">
            {props.buttonsArrays?.map((buttonsArray, index) => {
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
          {props.additionalButtonsArrays?.map((buttonsArray, index) => {
            return <ButtonsArrays key={index} {...buttonsArray} />;
          })}
        </div>
      </div>
    </footer>
  );
}
