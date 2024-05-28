import { cn } from "@sps/shared-frontend-utils-client";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useRef } from "react";
import { UseFormReturn } from "react-hook-form";
import mime from "mime-types";

export interface FileInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "form"> {
  form: UseFormReturn<any>;
}

interface FileItemProps {
  file: File;
  onDelete: (file: File) => void;
}

const FileItem = React.forwardRef<HTMLDivElement, FileItemProps>(
  (props, ref) => {
    const { file, onDelete } = props;

    const url = URL.createObjectURL(file);
    const isImage = file.type?.includes("image");

    return (
      <button
        className=""
        onClick={(e) => {
          e.stopPropagation();
          onDelete(file);
        }}
      >
        {isImage ? (
          <Image src={url} alt="" fill={true} />
        ) : (
          <div className="file__description">
            <p>{file?.name}</p>
          </div>
        )}
      </button>
    );
  },
);

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, type, ...props }, ref) => {
    const fileRef = props.form?.register(props?.name || "");
    const localRef = useRef<HTMLInputElement>(null);

    const [localFile, setLocalFile] = React.useState<File | null>();

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
      if (props.onChange) {
        if (e.target?.files?.length) {
          const files = e.target.files ?? undefined;

          setLocalFile(files[0] as unknown as File);

          props.onChange(files[0] as unknown as ChangeEvent<HTMLInputElement>);
        }
      }
    }

    useEffect(() => {
      if (typeof props.value === "string") {
        fetch(props.value)
          .then((response) => response.blob())
          .then((blob) => {
            const dataTransfer = new DataTransfer();
            const evt = new InputEvent("change");

            if (typeof props.value !== "string") {
              return;
            }

            const splittedPath = props.value?.split("/");
            const fileName = splittedPath[splittedPath.length - 1];
            const type = mime.lookup(fileName);

            if (!type) {
              return;
            }

            const file = new File([blob], fileName || "file", {
              type,
            });

            if (localRef?.current) {
              dataTransfer.items.add(file);
              localRef.current.files = dataTransfer.files;
              localRef.current.dispatchEvent(evt);
              onChange(evt as unknown as ChangeEvent<HTMLInputElement>);
            }
          })
          .catch((error) => {
            console.log(`🚀 ~ useEffect ~ error:`, error);
          });
      }
    }, [props.value]);

    return (
      <div
        className={cn(
          "relative flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 relative",
          className,
        )}
      >
        <label
          htmlFor={props.id || "file"}
          className={cn("", localFile ? "" : "absolute inset-0", className)}
        ></label>
        <input
          type="file"
          {...props}
          id={props.id || "file"}
          form=""
          {...fileRef}
          ref={localRef}
          className="hidden"
          value=""
          onChange={onChange}
        />
        {localFile ? (
          <FileItem
            {...props}
            file={localFile}
            onDelete={(e) => {
              setLocalFile(null);
              if (props.onChange) {
                const emptyEvent = new InputEvent("change");

                if (localRef?.current) {
                  localRef.current.files = new DataTransfer().files;
                  localRef.current.dispatchEvent(emptyEvent);
                  props.onChange(
                    emptyEvent as unknown as ChangeEvent<HTMLInputElement>,
                  );
                }
              }
            }}
          />
        ) : (
          "Select file"
        )}
      </div>
    );
  },
);

FileInput.displayName = "FileInput";

export { FileInput };
