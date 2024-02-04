import { Listbox } from "@headlessui/react";
import { forwardRef } from "react";
import Image from "next/image";
import { getFileUrl } from "@sps/utils";
import { XMarkIcon } from "@heroicons/react/24/outline";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";
import { Props } from "..";

interface OptionRenderPropArg {
  active: boolean;
  selected: boolean;
  disabled: boolean;
}

const RadioGroupInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { OptionComp = DefaultOption, renderOptionValue } = props;

  return (
    <Listbox data-ui-variant="radio-group" as="div" {...props} ref={ref}>
      <div className="radio-group">
        <Listbox.Options static={true} className="options">
          {props.options?.map((option: any, index: number) => (
            <Listbox.Option key={index} value={option}>
              {(params) => {
                return (
                  <OptionComp
                    option={option}
                    params={params}
                    renderOptionValue={renderOptionValue}
                    extraMedia={props.extraMedia}
                  />
                );
              }}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
});

export default RadioGroupInput;

function DefaultOption({
  params,
  option,
  renderOptionValue,
  extraMedia,
}: {
  params: OptionRenderPropArg;
  option: any;
  renderOptionValue?: (option: any) => string;
  extraMedia?: IFile[] | null;
}) {
  const { selected } = params;

  return (
    <div aria-selected={selected} className="option">
      <div
        data-media={extraMedia?.length ? true : false}
        className="extra-media-container"
      >
        {extraMedia?.length ? (
          extraMedia?.map((mediaItem: IFile, index: number) => (
            <Image key={index} src={getFileUrl(mediaItem)} fill={true} alt="" />
          ))
        ) : (
          <div className="check"></div>
        )}
      </div>
      <div className="title-container">
        <div
          data-media={option.media && option.media?.length > 0}
          className="media-container"
        >
          {option?.media?.map((mediaItem: IFile, index: number) => (
            <Image key={index} src={getFileUrl(mediaItem)} fill={true} alt="" />
          ))}
        </div>
        <span className="title">
          {(typeof renderOptionValue === "function"
            ? renderOptionValue(option)
            : option.title) || option}
        </span>
      </div>
    </div>
  );
}

function DeafultResetIcon() {
  return <XMarkIcon />;
}
