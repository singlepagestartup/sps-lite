"use client";

import {
  IModel,
  route,
  host,
  query,
  options,
} from "@sps/ecommerce/models/order/sdk/model";
import { factory, queryClient } from "@sps/shared-frontend-client-api";
export { Provider, queryClient } from "@sps/shared-frontend-client-api";
import {
  mutation as checkoutMutation,
  IMutationProps as ICheckoutMutationProps,
  IMutationFunctionProps as ICheckoutMutationFunctionProps,
} from "./mutations/checkout";
import { DefaultError, useMutation } from "@tanstack/react-query";
import { createId } from "@paralleldrive/cuid2";
import { globalActionsStore } from "@sps/shared-frontend-client-store";

type SetRequestId = (requestId: string) => void;

export const api = {
  ...factory<IModel>({
    queryClient,
    route,
    host,
    params: query,
    options,
  }),
  checkout: (props: {
    id: ICheckoutMutationProps["id"];
    params?: ICheckoutMutationProps["params"];
    options?: ICheckoutMutationProps["options"];
    setRequestId?: SetRequestId;
    reactQueryOptions?: any;
  }) => {
    return useMutation<IModel, DefaultError, ICheckoutMutationFunctionProps>({
      mutationKey: [`${route}/${props.id}/checkout`],
      mutationFn: (mutationFunctionProps: ICheckoutMutationFunctionProps) => {
        return checkoutMutation({
          cb: (data) => {
            addToGlobalStore({
              name: route,
              type: "checkout",
              result: data,
              props,
              setRequestId: props?.setRequestId,
            });
          },
          ...props,
        })(mutationFunctionProps);
      },
      ...props?.reactQueryOptions,
    });
  },
};

function addToGlobalStore(props: {
  name: string;
  type: string;
  props: any;
  result: any;
  setRequestId?: SetRequestId;
}) {
  const requestId = createId();

  const state = globalActionsStore.getState();

  if (props.setRequestId) {
    props.setRequestId(requestId);
  }

  state.addAction({
    type: props.type,
    name: props.name,
    props: props.props,
    result: props.result,
    timestamp: Date.now(),
    requestId,
  });
}
