export interface StartupWidgetDefaultProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export function StartupWidgetDefault({
  title,
  subtitle,
  description,
  className = "",
}: StartupWidgetDefaultProps) {
  return (
    <section
      className={`w-full rounded-2xl border border-[var(--color-sps-line)] bg-[var(--color-sps-white)] p-6 sm:p-10 ${className}`}
      data-ds-block="startup.widget.default"
      data-ds-layer="singlepage"
    >
      {subtitle ? (
        <p className="text-sm font-medium text-[var(--color-sps-muted)]">
          {subtitle}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold text-[var(--color-sps-graphite)] sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-sps-muted)]">
          {description}
        </p>
      ) : null}
    </section>
  );
}
