import { CloudArrowUpIcon, TrashIcon } from "@heroicons/react/24/outline";
import nextUtils from "@rogwild/next-utils";
const { getFileUrl } = nextUtils.api;
import Image from "next/image";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { useTranslationsContext } from "~hooks/use-translations/TranslationsContext";
import { BACKEND_URL } from "~utils/envs";
import { getInputErrors } from "~utils/forms";
import { IInputProps } from "..";

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
    index,
    type = `file`,
  } = props;

  const translate = useTranslationsContext();

  // console.log(`🚀 ~ FileInput ~ initialValue`, initialValue);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [localFiles, setLocalFiles] = useState<File[]>();

  const ctxProps = useFormContext();
  const htmlNodeId = useMemo(() => {
    return name.replace(`[`, `_`).replace(`]`, `_`).replace(`.`, `_`);
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

  const [value, setValue] = useState(field.value || ``);

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
    // console.log(`🚀 ~ onFileInputChange ~ e`, e);
    let filesArray;

    let target = e.target as HTMLInputElement;

    setValue(target?.value);

    // console.log(`🚀 ~ onFileInputChange ~ target`, target);

    if (target?.files) {
      filesArray = Array.from(target.files);

      addFilesToCards(filesArray);
    }

    const uploadFiles = ctxProps.getValues(`files`);

    ctxProps.setValue(`files`, {
      ...uploadFiles,
      [name]: filesArray,
    });

    onChange(e);
  }

  async function setInitFiles(initialValue: any) {
    // console.log(`🚀 ~ setInitFiles ~ initialValue`, initialValue);

    if (!fileInputRef?.current?.files) {
      return;
    }

    const dataTransfer = new DataTransfer();

    if (Array.isArray(initialValue)) {
      for (const serverFile of initialValue) {
        const fileUrl = getFileUrl(serverFile, { BACKEND_URL });

        const newFile = new File(
          [await (await fetch(fileUrl)).blob()],
          serverFile.name,
          { type: serverFile.mime }
        );

        // console.log(`🚀 ~ setInitFiles ~ newFile`, newFile);

        dataTransfer.items.add(newFile);
      }
    } else {
      const fileUrl = getFileUrl(initialValue, { BACKEND_URL });

      const newFile = new File(
        [await (await fetch(fileUrl)).blob()],
        initialValue.name,
        { type: initialValue.mime }
      );
      dataTransfer.items.add(newFile);
    }

    fileInputRef.current.files = dataTransfer.files;
    const evt = new Event(`change`);
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

    const evt = new Event(`change`);
    fileInputRef.current.dispatchEvent(evt);
    onFileInputChange(evt);
  }

  function onFileInputChangeProxy(e: ChangeEvent | Event) {
    if (!fileInputRef.current?.files) {
      return;
    }

    let target = e.target as HTMLInputElement;

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

    const evt = new Event(`change`);
    fileInputRef.current.dispatchEvent(evt);
    onFileInputChange(evt);
  }

  return (
    <div className={className}>
      <div className="inputs__label">
        <label>
          {` `}
          {typeof translate === `function` && label ? translate(label) : label}
        </label>
      </div>
      <div className="files__input">
        <label
          htmlFor={htmlNodeId}
          data-multiple={multiple ? true : false}
          data-filled={value ? true : false}
          data-files={localFiles?.length ? localFiles.length : 0}
          className="input"
        >
          <input
            type={type || `file`}
            id={htmlNodeId}
            onChange={onFileInputChangeProxy}
            onBlur={onBlur}
            value={value}
            accept={accept}
            multiple={multiple}
            ref={(e) => {
              if (e) {
                ref(e);
                fileInputRef.current = e;
              }
            }}
            placeholder={placeholder}
            className="hidden"
          />
          <ButtonComp
            accept={accept}
            multiple={multiple}
            placeholder={placeholder}
          />
        </label>
        <FilesArray files={localFiles} onFileDelete={onFileDelete} />
      </div>
      {inputError?.message ? (
        <div className="inputs__error">
          <p>
            {typeof translate === `function`
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
  placeholder,
}: {
  accept: string;
  multiple: boolean;
  placeholder?: string;
}) {
  return (
    <div className="button">
      <CloudArrowUpIcon />
      <p>{placeholder}</p>
    </div>
  );
}

function FilesArray({
  files,
  onFileDelete,
}: {
  files?: File[];
  onFileDelete: any;
}) {
  return (
    <div className="files__array">
      {files?.map((file, index) => {
        const url = URL.createObjectURL(file);
        const isImage = file.type.includes(`image`);

        return (
          <div key={index} className="file">
            {isImage ? (
              <Image src={url} alt="" fill={true} />
            ) : (
              <div className="file__description">
                <p>{file?.name}</p>
              </div>
            )}

            <div
              onClick={() => {
                onFileDelete(index);
              }}
              className="delete"
            >
              <TrashIcon className="icon" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
