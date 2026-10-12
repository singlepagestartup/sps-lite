"use client";
import { Select } from "@sps/ui-adapter";
import { cn } from "@sps/shared-frontend-client-utils";
import { AI_CHAT_SUPPORT_FORM_CONTENT as copy } from "@sps/shared-utils";
import type { IComponentPropsExtended } from "./interface";
export function Component(props: IComponentPropsExtended) {
  return (
    <div
      className={cn("min-w-0", props.data.className, props.className)}
      data-module="crm"
      data-model="form"
      data-variant={props.variant}
      data-id={props.data.id}
    >
      {!props.submitted && (
        <fieldset className="grid min-w-0 gap-5" disabled={props.pending}>
          <legend className="sr-only">Support request details</legend>
          {(["topic", "details", "result"] as const).map((field) => {
            const id = `${props.id}-${field}`;
            const error = props.errors?.[field];
            const attributes = {
              id,
              name: field,
              value: props.values[field],
              required: true,
              "aria-invalid": Boolean(error),
              "aria-describedby": error ? `${id}-error` : undefined,
            };
            return (
              <div key={field} className="grid min-w-0 gap-2">
                <label htmlFor={id} className="text-sm font-semibold">
                  {copy.fields[field].label}
                </label>
                {field === "topic" ? (
                  <Select
                    {...attributes}
                    ui="shadcn"
                    disabled={props.pending}
                    className="min-h-12"
                    placeholder={copy.fields[field].placeholder}
                    options={copy.topics.map((topic) => ({
                      value: topic,
                      label: topic,
                    }))}
                    onValueChange={(value) => props.onChange(field, value)}
                  />
                ) : (
                  <textarea
                    {...attributes}
                    placeholder={copy.fields[field].placeholder}
                    rows={field === "details" ? 5 : 4}
                    onChange={(event) =>
                      props.onChange(field, event.target.value)
                    }
                    className="min-h-12 w-full min-w-0 rounded-xl border border-border bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground aria-invalid:border-destructive"
                  />
                )}
                {error && (
                  <p
                    id={`${id}-error`}
                    role="alert"
                    className="text-sm text-destructive"
                  >
                    {error}
                  </p>
                )}
              </div>
            );
          })}
        </fieldset>
      )}
      <div className="mt-5">{props.children}</div>
    </div>
  );
}
