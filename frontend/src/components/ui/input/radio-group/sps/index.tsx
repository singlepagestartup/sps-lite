import { Listbox } from "@headlessui/react";
import { forwardRef } from "react";
import Image from "next/image";
import getFileUrl from "~utils/api/get-file-url";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { IEntity as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";
import { Props } from "..";

interface OptionRenderPropArg {
  active: boolean;
  selected: boolean;
  disabled: boolean;
}

const RadioGroupInput = forwardRef((props: Props, ref) => {
  const { OptionComp = DefaultOption, renderOptionValue } = props;

  return (
    <Listbox data-ui-variant="radio-group" as="div" {...props}>
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
  extraMedia?: IBackendFile[] | null;
}) {
  const { selected } = params;

  return (
    <div aria-selected={selected} className="option">
      <div
        data-media={extraMedia?.length ? true : false}
        className="extra-media-container"
      >
        {extraMedia?.length ? (
          extraMedia?.map((mediaItem: IBackendFile, index: number) => (
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
          {option?.media?.map((mediaItem: IBackendFile, index: number) => (
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
