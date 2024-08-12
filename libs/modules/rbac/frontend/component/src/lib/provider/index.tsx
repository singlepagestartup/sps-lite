"use client";

import { IComponentProps } from "./interface";
import { ethereumVirtualMachine } from "@sps/shared-frontend-client-web3";

export function Provider(props: IComponentProps) {
  const EthereumVirtualMachineProvider = ethereumVirtualMachine.Web3Provider;

  return (
    <div data-module="rbac" data-variant="provider">
      <EthereumVirtualMachineProvider>
        {props.children}
      </EthereumVirtualMachineProvider>
    </div>
  );
}
