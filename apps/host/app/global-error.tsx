"use client";

import { fonts } from "./fonts";
import { GlobalError as SpsHostGlobalError } from "@sps/sps-host/frontend/root";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <SpsHostGlobalError error={error} reset={reset} fonts={fonts} />;
}
