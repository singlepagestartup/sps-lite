/**
 * blog.tag.button-default
 *
 * Single article tag button. Owned by the blog module (model: tag). Tag-list
 * widgets compose a list of these instead of re-implementing the chip markup.
 */

export interface TagButtonDefaultProps {
  variant?: string;
  label: string;
  href?: string;
}

export const defaultTagButtonDefaultProps: TagButtonDefaultProps = {
  label: "pricing",
  href: "/blog/tags/pricing",
};

export function TagButtonDefault(props?: Partial<TagButtonDefaultProps>) {
  const { label, href } = { ...defaultTagButtonDefaultProps, ...props };

  return (
    <a
      href={href}
      data-ds-block="blog.tag.button-default"
      data-ds-layer="singlepage"
      className="inline-flex min-h-11 items-center rounded-full border border-border bg-muted px-3 py-2 text-xs font-medium text-muted-foreground no-underline transition hover:border-border hover:bg-card hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
      data-module="blog"
      data-model="tag"
      data-variant={props?.variant ?? "button-default"}
    >
      #{label}
    </a>
  );
}
