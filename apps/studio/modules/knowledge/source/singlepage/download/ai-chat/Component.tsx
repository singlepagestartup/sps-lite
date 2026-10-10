"use client";
import { Component as WebsiteBuilderModuleFeature } from "../../../../../website-builder/feature/index";

import { Component as WebsiteBuilderModuleButton } from "../../../../../website-builder/button/index";
import {
  forwardRef as forwardRefControl,
  type ButtonHTMLAttributes as ButtonControlProps,
} from "react";
import type IconGlyphs from "../../../../../website-builder/feature/singlepage/icon/icons.json";
import { useSource } from "../../overview/document/ai-chat/Source";
function Icon(props: {
  name: keyof typeof IconGlyphs;
  size?: 20 | 24;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}) {
  return <WebsiteBuilderModuleFeature {...props} variant="icon" />;
}

export interface ISourceDownloadProps {
  label?: string;
}
export function Component({ label = ".md" }: ISourceDownloadProps) {
  const { source } = useSource();
  function download() {
    const url = URL.createObjectURL(
      new Blob([`# ${source.title}\n\n${source.content}\n`], {
        type: "text/markdown;charset=utf-8",
      }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = `${source.title}.md`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <Button
      data-ds-block="knowledge.source.download-ai-chat"
      variant="secondary"
      aria-label={`Download ${source.title}.md`}
      onClick={download}
    >
      <Icon name="arrow-down" />
      {label}
    </Button>
  );
}
const Button = forwardRefControl<
  HTMLButtonElement,
  ButtonControlProps<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "plain" | "danger";
  }
>(function Button({ variant = "primary", ...props }, ref) {
  return (
    <WebsiteBuilderModuleButton
      {...props}
      variant="control"
      appearance={variant}
      ref={ref}
    />
  );
});
