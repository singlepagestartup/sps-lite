import { Transition, Listbox } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useMemo, useRef } from "react";
import { useController, useFormContext } from "react-hook-form";
import { useTranslationsContext } from "~hooks/use-translations/TranslationsContext";
import { getInputErrors } from "../utils";
import { IInputProps } from "..";
import Image from "next/image";
import getFileUrl from "~utils/api/get-file-url";
import { IEntity as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";

interface OptionRenderPropArg {
  active: boolean;
  selected: boolean;
  disabled: boolean;
}

export default function ListboxInput(props: IInputProps) {
  const {
    label,
    name,
    rules,
    options,
    shouldUnregister,
    defaultValue = null,
    className,
    initialValue,
    placeholder = "",
    ButtonComp = DefaultButton,
    OptionComp = DefaultOption,
    ResetIcon = DeafultResetIcon,
    by,
    multiple,
    renderOptionValue,
  } = props;

  const translate = useTranslationsContext();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const htmlNodeId = useMemo(() => {
    return name.replace(/\[/g, "_").replace(/\]/g, "_").replace(/\./g, "_");
  }, [name]);

  const additionalProps = useMemo(() => {
    if (multiple) {
      return { multiple: true };
    }

    return {};
  }, [multiple]);

  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  const {
    field: { onChange, ref, value, onBlur },
  } = useController({
    name,
    control,
    rules,
    shouldUnregister,
    defaultValue: multiple ? [] : defaultValue,
  });

  function reset(e: any) {
    if (multiple) {
      onChange({ ...e, target: { value: [] } });
    } else {
      onChange({ ...e, target: { value: "" } });
    }
  }

  const inputError = getInputErrors(errors)(name);

  useEffect(() => {
    if (initialValue && inputRef?.current) {
      const evt = new Event("change");
      inputRef.current.value = initialValue;
      inputRef.current.dispatchEvent(evt);
      onChange(evt);
    }
  }, [JSON.stringify(initialValue), inputRef?.current]);

  /**
   * If using in repeatable component
   * useForm set {} as value of input
   * and validation required skips that
   * fiels.
   */
  useEffect(() => {
    if (JSON.stringify(value) === "{}") {
      setValue(name, undefined);
    }
  }, [JSON.stringify(value)]);

  useEffect(() => {
    // console.log(`🚀 ~ TextWithControlled ~ props`, props);
    // console.log(`🚀 ~ useEffect ~ errors`, errors);
  }, [errors]);

  return (
    <div
      data-component="elements.input"
      data-variant={props.variant}
      className={`input-listbox ${className || ""}`}
    >
      {label ? (
        <div className="input-label">
          <label htmlFor={htmlNodeId}>
            {typeof translate === "function" && label
              ? translate(label)
              : label}
          </label>
        </div>
      ) : null}
      <div className="input-container">
        <div className="reset-button-container">
          <button onClick={reset} className="reset-button">
            <div className="icon">
              <ResetIcon className="w-4 h-5" />
            </div>
            <p>
              {typeof translate === "function" ? translate("Reset") : "Reset"}
            </p>
          </button>
        </div>
        <Listbox
          as="div"
          id={htmlNodeId}
          value={value}
          by={by}
          onChange={(e) => {
            onChange(e);
          }}
          ref={(e: any) => {
            if (e) {
              ref(e);
              inputRef.current = e;
            }
          }}
          {...additionalProps}
        >
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
      </div>
      {inputError?.message ? (
        <div className="input-error">
          <p>
            {typeof translate === "function"
              ? translate(inputError.message)
              : inputError.message}
          </p>
        </div>
      ) : null}
    </div>
  );
}

function DefaultButton({
  value,
  placeholder,
  renderOptionValue,
  media,
  additionalMedia,
}: {
  value: any;
  placeholder: string;
  renderOptionValue?: (value: any) => string;
  media?: IBackendFile[];
  additionalMedia?: IBackendFile[];
}) {
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

  const renderIcons: IBackendFile[] = useMemo(() => {
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
        {media?.map((mediaItem: IBackendFile, index: number) => (
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
        {additionalMedia?.map((mediaItem: IBackendFile, index: number) => (
          <Image key={index} src={getFileUrl(mediaItem)} fill={true} alt="" />
        ))}
      </div>
    </div>
  );
}

function DefaultOption({
  params,
  option,
  renderOptionValue,
  extraMedia,
}: {
  params: OptionRenderPropArg;
  option: any;
  renderOptionValue: (option: any) => string;
  extraMedia?: IBackendFile[];
}) {
  const { selected } = params;

  return (
    <div aria-selected={selected} className="option">
      <div
        data-media={extraMedia?.length ? true : false}
        className="extra-media-container"
      >
        {extraMedia?.map((mediaItem: IBackendFile, index: number) => (
          <Image key={index} src={getFileUrl(mediaItem)} fill={true} alt="" />
        ))}
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
