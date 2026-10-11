import {
  type CrmRequestRecord,
  defaultCrmRequest,
} from "../../../shared/demo-crm";

export interface CrmRequestDefaultProps {
  variant?: string;
  request: CrmRequestRecord;
}

export const defaultCrmRequestDefaultProps: CrmRequestDefaultProps = {
  request: defaultCrmRequest,
};

export function CrmRequestDefault(props?: Partial<CrmRequestDefaultProps>) {
  const { request } = {
    ...defaultCrmRequestDefaultProps,
    ...props,
  };

  return (
    <article
      className="rounded-2xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-6"
      data-ds-block="crm.request.default"
      data-ds-layer="singlepage"
      data-module="crm"
      data-model="request"
      data-variant={props?.variant ?? "default"}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className=" text-xl font-semibold text-[var(--color-sps-graphite)]">
            {request.formTitle}
          </h3>
        </div>
        <span className="rounded-full bg-[var(--color-sps-grey)] px-3 py-1 text-xs font-medium text-[var(--color-sps-graphite)]">
          {request.status}
        </span>
      </div>
      <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-[var(--color-sps-muted)]">Account</dt>
          <dd className="mt-1 font-medium text-[var(--color-sps-graphite)]">
            {request.subjectName}
          </dd>
        </div>
        <div>
          <dt className="text-[var(--color-sps-muted)]">Created</dt>
          <dd className="mt-1 font-medium text-[var(--color-sps-graphite)]">
            {request.createdAt}
          </dd>
        </div>
      </dl>
      <p className="mt-5 text-sm leading-6 text-[var(--color-sps-muted)]">
        {request.summary}
      </p>
    </article>
  );
}
