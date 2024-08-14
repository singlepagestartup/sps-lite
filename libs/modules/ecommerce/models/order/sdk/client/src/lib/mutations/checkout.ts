"use client";

import { IModel } from "@sps/ecommerce/models/order/sdk/model";
import { toast } from "sonner";
import {
  action,
  IActionProps,
} from "../../../../server/src/lib/actions/checkout";

export interface IMutationProps {
  id: IActionProps["id"];
  options?: IActionProps["options"];
  params?: IActionProps["params"];
  cb?: (data: IModel) => void;
}

export interface IMutationFunctionProps {
  id?: IActionProps["id"];
  data: IActionProps["data"];
  options?: IActionProps["options"];
  params?: IActionProps["params"];
}

export function mutation(
  props: IMutationProps,
): (mutationFunctionProps: IMutationFunctionProps) => Promise<IModel> {
  return async (mutationFunctionProps: IMutationFunctionProps) => {
    try {
      const id = mutationFunctionProps.id || props.id;

      if (!id) {
        throw new Error("id is required");
      }

      const res = await action({
        id,
        params: mutationFunctionProps.params || props.params,
        options: {
          ...mutationFunctionProps.options,
          ...props.options,
        },
        data: mutationFunctionProps.data,
      });

      if (props.cb) {
        props.cb(res);
      }

      return res;
    } catch (error: any) {
      toast.error(error.message);

      throw error;
    }
  };
}
