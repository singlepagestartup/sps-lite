import {
  CloudArrowUpIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { useTranslationsContext } from "~hooks/use-translations/TranslationsContext";
import { getInputErrors } from "../utils";
import { IInputProps } from "..";
import getFileUrl from "~utils/api/get-file-url";
import axios from "axios";
import { IEntity as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";

export default function FileInput(props: IInputProps) {
  const {
    label,
    name,
    rules,
    shouldUnregister,
    placeholder,
    accept,
    className,
    multiple = false,
    initialValue,
    ButtonComp = DefaultButton,
    ResetIcon = DeafultResetIcon,
    index,
    type = "file",
  } = props;

  const translate = useTranslationsContext();

  // console.log(`🚀 ~ FileInput ~ initialValue`, initialValue);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [localFiles, setLocalFiles] = useState<File[]>();

  const ctxProps = useFormContext();
  const htmlNodeId = useMemo(() => {
    return name.replace(/\[/g, "_").replace(/\]/g, "_").replace(/\./g, "_");
  }, [name]);

  const {
    field,
    field: { onChange, ref, onBlur, value: passedVal },
    formState: { errors },
  } = useController({
    name,
    control: ctxProps.control,
    rules,
    shouldUnregister,
    defaultValue: null,
  });

  const [value, setValue] = useState(field.value || "");
  // console.log("🚀 ~ FileInput ~ value:", value);

  function reset(e: any) {
    setInitFiles([]);
  }

  useEffect(() => {
    if (!passedVal && value && localFiles?.length) {
      for (const [index, localFile] of localFiles.entries()) {
        onFileDelete(index);
      }
    }
  }, [passedVal]);

  const inputError = getInputErrors(errors)(name);

  function addFilesToCards(files: File[]) {
    const filesToAdd = [] as File[];

    for (const file of files) {
      filesToAdd.push(file);
    }

    setLocalFiles(filesToAdd);
  }

  function onFileInputChange(e: ChangeEvent | Event) {
    let filesArray;

    const target = e.target as HTMLInputElement;

    setValue(target?.value);

    // console.log(`🚀 ~ onFileInputChange ~ target`, target);

    if (target?.files) {
      filesArray = Array.from(target.files);

      addFilesToCards(filesArray);
    }

    const uploadFiles = ctxProps.getValues("files");

    ctxProps.setValue("files", {
      ...uploadFiles,
      [name]: filesArray,
    });

    onChange(e);
  }

  async function setInitFiles(initialValue: any) {
    // console.log("🚀 ~ setInitFiles ~ initialValue:", initialValue);
    // second and other rerenders in repeatable
    if (typeof initialValue === "string") {
      return;
    }

    if (
      !fileInputRef?.current?.files ||
      Object.keys(initialValue).length === 0
    ) {
      return;
    }

    const dataTransfer = new DataTransfer();

    if (Array.isArray(initialValue)) {
      for (const serverFile of initialValue) {
        const fileUrl = getFileUrl(serverFile);

        const file = await axios({
          url: fileUrl,
          method: "GET",
          responseType: "blob",
        }).then((response) => {
          return new File(
            [response.data],
            `${(Math.random() * 1e10).toFixed(0)}`,
            {
              type: serverFile.mime,
            },
          );
        });

        dataTransfer.items.add(file);
      }
    } else {
      const fileUrl = getFileUrl(initialValue);

      const file = await axios({
        url: fileUrl,
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        return new File(
          [response.data],
          `${(Math.random() * 1e10).toFixed(0)}`,
          {
            type: initialValue.mime,
          },
        );
      });

      dataTransfer.items.add(file);
    }

    fileInputRef.current.files = dataTransfer.files;
    const evt = new Event("change");
    // console.log(`🚀 ~ setInitFiles ~ fileInputRef`, fileInputRef);
    fileInputRef.current.dispatchEvent(evt);
    onFileInputChange(evt);
  }

  useEffect(() => {
    if (!fileInputRef.current || !initialValue || initialValue === null) {
      return;
    }

    setInitFiles(initialValue);
  }, [fileInputRef, initialValue]);

  function onFileDelete(index: number) {
    if (!fileInputRef.current?.files) {
      return;
    }

    setLocalFiles((prev) => {
      return prev?.filter((f, pI) => pI !== index);
    });

    const newFiles = new DataTransfer();
    const oldFiles = Array.from(fileInputRef.current.files);
    for (const [fIndex, oldFile] of oldFiles.entries()) {
      if (fIndex === index) {
        continue;
      }

      newFiles.items.add(oldFile);
    }

    fileInputRef.current.files = newFiles.files;

    const evt = new Event("change");
    fileInputRef.current.dispatchEvent(evt);
    onFileInputChange(evt);
  }

  function onFileInputChangeProxy(e: ChangeEvent | Event) {
    if (!fileInputRef.current?.files) {
      return;
    }

    const target = e.target as HTMLInputElement;

    const newFiles = new DataTransfer();
    if (localFiles) {
      for (const oldFile of localFiles) {
        newFiles.items.add(oldFile);
      }
    }

    if (target.files) {
      const uploadedFiles = Array.from(target.files);

      for (const uploadedFile of uploadedFiles) {
        newFiles.items.add(uploadedFile);
      }
    }

    fileInputRef.current.files = newFiles.files;

    const evt = new Event("change");
    fileInputRef.current.dispatchEvent(evt);
    onFileInputChange(evt);
  }

  return (
    <div
      data-component="elements.input"
      data-variant={props.variant}
      className={`input-file ${className || ""}`}
    >
      {label ? (
        <div className="input-label">
          <label>
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
        <label
          htmlFor={htmlNodeId}
          data-multiple={multiple ? true : false}
          data-filled={value?.length ? true : false}
          data-files={localFiles?.length ? localFiles.length : 0}
          className="input"
        >
          <input
            type={type || "file"}
            id={htmlNodeId}
            onChange={onFileInputChangeProxy}
            onBlur={onBlur}
            // If pass data in repeatable component, get an error
            // InvalidStateError: Failed to set the 'value' property on 'HTMLInputElement': This input element accepts a filename, which may only be programmatically set to the empty string.
            // value={value || ""}
            accept={accept}
            multiple={multiple ? multiple : undefined}
            ref={(e) => {
              if (e) {
                ref(e);
                fileInputRef.current = e;
              }
            }}
            placeholder={placeholder ? placeholder : undefined}
            className="hidden"
          />
          <ButtonComp
            {...props}
            accept={accept}
            multiple={multiple}
            placeholder={placeholder}
          />
        </label>
        <FilesArray
          {...props}
          multiple={multiple ? true : false}
          files={localFiles}
          onFileDelete={onFileDelete}
        />
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
  accept,
  multiple,
  media,
  additionalMedia,
  placeholder,
}: {
  accept: string;
  multiple?: boolean | null;
  placeholder?: string | null;
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
}) {
  return (
    <div className="button">
      <div className="button-container">
        <div className="icon-container">
          {media?.length ? (
            <Image src={getFileUrl(media[0])} fill={true} alt="" />
          ) : (
            <CloudArrowUpIcon />
          )}
        </div>
        <p>{placeholder}</p>
      </div>
    </div>
  );
}

function FilesArray({
  files,
  onFileDelete,
  multiple,
  additionalMedia,
}: {
  multiple: boolean;
  files?: File[];
  onFileDelete: any;
  additionalMedia?: IBackendFile[] | null;
}) {
  return (
    <div
      data-multiple={multiple}
      data-files={files?.length}
      className="files-array"
    >
      {files?.map((file, index) => {
        const url = URL.createObjectURL(file);
        const isImage = file.type.includes("image");

        return (
          <div key={index} className="file">
            {isImage ? (
              <Image src={url} alt="" fill={true} />
            ) : (
              <div className="file__description">
                <p>{file?.name}</p>
              </div>
            )}

            <button
              onClick={() => {
                onFileDelete(index);
              }}
              className="delete-button"
            >
              <div className="icon-container">
                {additionalMedia?.length ? (
                  <Image
                    src={getFileUrl(additionalMedia[0])}
                    fill={true}
                    alt=""
                  />
                ) : (
                  <TrashIcon />
                )}
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}

function DeafultResetIcon() {
  return <XMarkIcon />;
}
