export const defaultFeatureBadgeDefaultProps = {
  label: "v2.0 - Now with 15 modules",
};

export type FeatureBadgeDefaultProps = typeof defaultFeatureBadgeDefaultProps;

export function FeatureBadgeDefault(props?: Partial<FeatureBadgeDefaultProps>) {
  const { label } = { ...defaultFeatureBadgeDefaultProps, ...props };

  return (
    <div
      className="inline-flex min-h-8 max-w-full items-center gap-2 rounded-full border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] px-3 py-1 text-xs font-medium leading-5 text-[var(--color-sps-graphite)]"
      data-ds-block="website-builder.feature.badge-default"
      data-ds-layer="singlepage"
    >
      <span
        className="inline-block h-2 w-2 shrink-0 rounded-full bg-[var(--color-sps-green)]"
        aria-hidden="true"
      />
      {label}
    </div>
  );
}
