import { ReactNode } from "react";
import { type Config } from "wagmi";

export interface IComponentProps {
  variant: "default";
  children: ReactNode;
  config: Config<any, any>;
}
