"use client";

import { fonts } from "./fonts";
import { globalError } from "@sps/sps-website-builder-frontend";

export default function GlobalError({ error, reset }: any) {
  return globalError.GlobalError({ error, reset, fonts });
}
