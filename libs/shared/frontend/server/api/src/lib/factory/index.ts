import {
  actions,
  IFindByIdActionProps,
  IFindActionsProps,
  IUpdateActionProps,
  ICreateActionProps,
  IDeleteActionProps,
} from "@sps/shared-frontend-api";

export interface IFactoryProps {
  route: string;
  host: string;
}

export function factory<T>(params: IFactoryProps) {
  const api = {
    findById: async (
      props: Omit<IFindByIdActionProps, "model" | "route" | "host">,
    ) => {
      return await actions.findById<T>({
        ...props,
        route: params.route,
        host: params.host,
      });
    },
    find: async (
      props?: Omit<IFindActionsProps, "model" | "route" | "host">,
    ) => {
      return await actions.find<T>({
        ...props,
        route: params.route,
        host: params.host,
      });
    },
    update: async (
      props: Omit<IUpdateActionProps, "model" | "route" | "host">,
    ) => {
      return await actions.update<T>({
        ...props,
        route: params.route,
        host: params.host,
      });
    },
    create: async (
      props: Omit<ICreateActionProps, "model" | "route" | "host">,
    ) => {
      return await actions.create<T>({
        ...props,
        route: params.route,
        host: params.host,
      });
    },
    delete: async (
      props: Omit<IDeleteActionProps, "model" | "route" | "host">,
    ) => {
      return await actions.delete<T>({
        ...props,
        route: params.route,
        host: params.host,
      });
    },
  };

  return api;
}
