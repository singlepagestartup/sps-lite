import { ISpsLiteBackendApiLoader } from "~redux/services/backend/api/loader/interfaces/sps-lite";
import Simple from "./Simple";
import { FC, ReactNode } from "react";

export interface ISpsLiteLoaderBlock extends ISpsLiteBackendApiLoader {
  children: ReactNode;
}

export const variants = {
  simple: Simple,
};

export default function Loaders(props: ISpsLiteLoaderBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteLoaderBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
