"use client";
import { useCallback, useId, useRef, useState, type FormEvent } from "react";
import { api } from "@sps/rbac/models/subject/sdk/client";
import { Component as CrmForm } from "@sps/crm/models/form/frontend/component";
import type { IModel as IForm } from "@sps/crm/models/form/sdk/model";
import { Icon } from "@sps/ui-adapter";
import { AI_CHAT_SUPPORT_CONTENT as copy } from "@sps/shared-utils";
import type { IComponentPropsExtended } from "./interface";
export function Component(props: IComponentPropsExtended) {
  return (
    <CrmForm
      isServer={false}
      variant="find"
      apiProps={{
        params: {
          filters: {
            and: [{ column: "slug", method: "eq", value: "ai-chat-support" }],
          },
        },
      }}
    >
      {({ data }) =>
        !data?.length ? (
          <p role="alert">Support form is unavailable.</p>
        ) : (
          data.map((form) => (
            <SupportForm key={form.id} {...props} crmForm={form} />
          ))
        )
      }
    </CrmForm>
  );
}
function SupportForm(props: IComponentPropsExtended & { crmForm: IForm }) {
  const id = useId();
  const form = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState({ topic: "", details: "", result: "" });
  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof values, string>>
  >({});
  const [failure, setFailure] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const request = api.crmModuleFromRequestCreate({});
  const change = useCallback((field: keyof typeof values, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }, []);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (request.isPending) return;
    const next: typeof errors = {};
    for (const field of ["topic", "details", "result"] as const)
      if (!values[field].trim()) next[field] = copy.labels[`${field}-error`];
    setErrors(next);
    const invalid = Object.keys(next)[0];
    if (invalid) {
      form.current
        ?.querySelector<HTMLElement>(`[id="${id}-${invalid}"]`)
        ?.focus();
      return;
    }
    setFailure("");
    try {
      await request.mutateAsync({
        id: props.data.id,
        crmModuleFormId: props.crmForm.id,
        data: { ...values },
      });
      setSubmitted(true);
    } catch (error) {
      setFailure(
        error instanceof Error
          ? error.message
          : "Request could not be submitted. Please try again.",
      );
    }
  }
  return (
    <form
      ref={form}
      onSubmit={submit}
      noValidate
      data-module="rbac"
      data-model="subject"
      data-variant={props.variant}
    >
      <CrmForm
        isServer={false}
        variant="support-ai-chat"
        data={props.crmForm}
        id={id}
        values={values}
        errors={errors}
        onChange={change}
        submitted={submitted}
        pending={request.isPending}
      >
        {submitted ? (
          <div className="grid gap-5">
            <p
              role="status"
              className="rounded-xl border border-border bg-muted p-4 text-sm"
            >
              {copy.labels["success-message"]}
            </p>
            {copy.successParagraphs.map((text) => (
              <p key={text} className="text-sm leading-6 text-muted-foreground">
                {text}
              </p>
            ))}
            <dl className="grid gap-4 rounded-xl bg-muted p-4">
              {Object.entries(values).map(([field, value]) => (
                <div key={field}>
                  <dt className="text-sm font-semibold capitalize">{field}</dt>
                  <dd className="mt-1 whitespace-pre-wrap break-words text-sm text-muted-foreground">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="min-h-11 rounded-xl border border-border px-5 text-sm font-semibold hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              {copy.labels["edit-request"]}
            </button>
          </div>
        ) : (
          <>
            {failure && (
              <p role="alert" className="mb-4 text-sm text-destructive">
                {failure}
              </p>
            )}
            <button
              type="submit"
              disabled={request.isPending}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Icon name="paper-plane-tilt" />
              {request.isPending ? "Sending…" : copy.labels.submit}
            </button>
          </>
        )}
      </CrmForm>
    </form>
  );
}
