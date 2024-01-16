import { useMemo } from "react";
import { Label } from "../label";
import { cn } from "~utils/formatters/cn";
import Input, { Props as InputProps } from "~components/ui/input/text";
import { useController, useFormContext } from "react-hook-form";
import { getInputErrors } from "../input/get-input-errors";
import { useTranslationsContext } from "~hooks/use-translations/TranslationsContext";
import Button from "../button";
import Image from "next/image";
import getFileUrl from "~utils/api/get-file-url";
import { IEntity as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";

export interface Props extends InputProps {
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
}

const FormField = (props: Props) => {
  const { label, name, className, ResetIcon } = props;

  const translate = useTranslationsContext();

  const htmlNodeId = useMemo(() => {
    return name.replace(/\[/g, "_").replace(/\]/g, "_").replace(/\./g, "_");
  }, [name]);

  const {
    control,
    formState: { errors },
  } = useFormContext();
  const {
    field: { onChange, ref, value, onBlur },
  } = useController({
    name,
    control,
  });

  function reset(e: any) {
    onChange({ ...e, target: { value: "" } });
  }

  const error = getInputErrors(errors)(name);

  return (
    <div data-ui="form-field" className={cn("relative w-full", className)}>
      {htmlNodeId && label ? (
        <Label htmlFor={htmlNodeId}>{props.label}</Label>
      ) : null}
      <div className="reset-button-container">
        <Button onClick={reset} data-ui-variant="reset" data-ui-size="sm">
          {ResetIcon ? (
            <div className="icon">
              <ResetIcon className="w-4 h-5" />
            </div>
          ) : null}
          {typeof translate === "function" ? translate("Reset") : "Reset"}
        </Button>
      </div>
      <div
        data-media={props.media && props.media?.length > 0}
        className="media-container"
      >
        {props.media?.map((media, index: number) => (
          <Image key={index} src={getFileUrl(media)} fill={true} alt="" />
        ))}
      </div>
      <Input {...props} />
      <div
        data-media={props.additionalMedia && props.additionalMedia?.length > 0}
        className="additional-media-container"
      >
        {props.additionalMedia?.map((additionalMedia, index: number) => (
          <Image
            key={index}
            src={getFileUrl(additionalMedia)}
            fill={true}
            alt=""
          />
        ))}
      </div>
      {error ? (
        <div className="input-error">
          <p>
            {typeof translate === "function"
              ? translate(error.message)
              : error.message}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default FormField;
