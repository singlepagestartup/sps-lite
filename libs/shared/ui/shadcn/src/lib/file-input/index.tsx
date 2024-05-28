import { cn } from "@sps/shared-frontend-utils-client";
import React, { ChangeEvent, useMemo } from "react";
import { UseFormReturn } from "react-hook-form";

export interface FileInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "form"> {
  form: UseFormReturn<any>;
}

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, type, ...props }, ref) => {
    const fileRef = props.form?.register(props?.name || "");

    const [localFiles, setLocalFiles] = React.useState<File[] | null>();

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
      if (props.onChange) {
        if (e.target?.files?.length) {
          const files = e.target.files ?? undefined;
          setLocalFiles(e.target.files as unknown as File[]);
          props.onChange(files[0] as unknown as ChangeEvent<HTMLInputElement>);
        }
      }
    }

    return (
      <label
        htmlFor={props.id || "file"}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
      >
        <input
          type="file"
          {...props}
          id={props.id || "file"}
          form=""
          {...fileRef}
          className="hidden"
          value=""
          onChange={onChange}
        />
        {localFiles?.length ? localFiles?.length : "Select files"}
      </label>
    );
  },
);

FileInput.displayName = "FileInput";

export { FileInput };
