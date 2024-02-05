"use client";

import { IComponentPropsExtended } from "../../interface";
import { api } from "../../../api/client";
import { Button } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  const [refetch, { data }] = api.useLazyFindOneQuery();

  return (
    <div className="flex items-center">
      <p className="text-md font-bold capitalize">{props.title}</p>
      <Button
        ui="shadcn"
        variant="destructive"
        onClick={() => {
          refetch({ id: props.id });
        }}
      >
        Refetch attribute key
      </Button>
    </div>
  );
}
