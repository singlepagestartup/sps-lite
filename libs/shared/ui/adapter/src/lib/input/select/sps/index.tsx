import { Transition, Listbox } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FC, Fragment, forwardRef, useMemo } from "react";
import Image from "next/image";
import { getFileUrl } from "@sps/utils";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";

interface OptionRenderPropArg {
  active: boolean;
  selected: boolean;
  disabled: boolean;
}

export interface Props {
  options: any[];
  placeholder?: string;
  ButtonComp?: FC<any>;
  OptionComp?: FC<any>;
  renderOptionValue?: (option: any) => string;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
  extraMedia?: IFile[] | null;
}

const SelectInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    options,
    placeholder = "",
    ButtonComp = DefaultButton,
    OptionComp = DefaultOption,
    renderOptionValue,
  } = props;

  return (
    <Listbox data-ui-variant="listbox" as="div" {...props} ref={ref}>
      <div className="listbox">
        <Listbox.Button className="button-container">
          {(listboxProps) => {
            return (
              <ButtonComp
                {...listboxProps}
                placeholder={placeholder}
                renderOptionValue={renderOptionValue}
                media={props.media}
                additionalMedia={props.additionalMedia}
              />
            );
          }}
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="options">
            {options?.map((option: any, index: number) => (
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
        </Transition>
      </div>
    </Listbox>
  );
});

export default SelectInput;

export interface ButtonProps {
  value: any;
  placeholder: string;
  renderOptionValue?: (value: any) => string;
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}

function DefaultButton({
  value,
  placeholder,
  renderOptionValue,
  media,
  additionalMedia,
}: ButtonProps) {
  const renderValue = useMemo(() => {
    if (Array.isArray(value)) {
      if (value.length) {
        return value
          .map((selectedValue, index) => {
            const title = selectedValue.title || selectedValue;

            return title;
          })
          .join(", ");
      } else {
        return placeholder;
      }
    } else {
      if (value?.title) {
        return value.title;
      } else {
        return value !== undefined &&
          value !== "" &&
          (typeof value === "string" || typeof value === "number")
          ? typeof renderOptionValue === "function"
            ? renderOptionValue(value)
            : value
          : placeholder;
      }
    }
  }, [value, placeholder]);

  const renderIcons: IFile[] = useMemo(() => {
    if (Array.isArray(value)) {
      if (value.length) {
        return value.reduce((prev, selectedValue, index) => {
          if (selectedValue.media?.length > 0) {
            return [...prev, ...selectedValue.media];
          }
        }, []);
      }
    } else {
      if (value?.media?.length) {
        return value.media;
      }
    }
  }, [value]);

  return (
    <div className="button">
      <div data-media={media && media?.length > 0} className="media-container">
        {media?.map((mediaItem: IFile, index: number) => (
          <Image key={index} src={getFileUrl(mediaItem)} fill={true} alt="" />
        ))}
      </div>
      <div className="title-container">
        <div
          data-media={renderIcons && renderIcons?.length > 0}
          className="selected-icon-container"
        >
          {renderIcons?.map((selectedIcon, index) => {
            return (
              <div key={index} className="icon-container">
                <Image src={getFileUrl(selectedIcon)} fill={true} alt="" />
              </div>
            );
          })}
        </div>
        <span className="title">{renderValue}</span>
      </div>
      <div
        data-media={additionalMedia && additionalMedia?.length > 0}
        className="additional-media-container"
      >
        {additionalMedia?.map((mediaItem: IFile, index: number) => (
          <Image key={index} src={getFileUrl(mediaItem)} fill={true} alt="" />
        ))}
      </div>
    </div>
  );
}

export interface OptionProps {
  params: OptionRenderPropArg;
  option: any;
  renderOptionValue?: (option: any) => string;
  extraMedia?: IFile[] | null;
}

function DefaultOption({
  params,
  option,
  renderOptionValue,
  extraMedia,
}: OptionProps) {
  const { selected } = params;

  return (
    <div aria-selected={selected} className="option">
      <div
        data-media={extraMedia?.length ? true : false}
        className="extra-media-container"
      >
        {extraMedia?.map((mediaItem: IFile, index: number) => (
          <Image key={index} src={getFileUrl(mediaItem)} fill={true} alt="" />
        ))}
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
