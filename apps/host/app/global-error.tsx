"use client";

import { fonts } from "./fonts";
import { GlobalError as SpsWebsiteBuilderGlobalError } from "@sps/sps-website-builder-frontend";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <SpsWebsiteBuilderGlobalError error={error} reset={reset} fonts={fonts} />
  );
}
