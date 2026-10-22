import { Component as Category } from "@sps/blog/models/category/frontend/component";
import type { IContentProps } from "./interface";
export function Component(props: IContentProps) {
  const data = props.categorySlug;
  if (!data) return null;
  return (
    <Category
      isServer={props.isServer}
      variant="find"
      apiProps={{
        params: {
          filters: {
            and: [
              {
                column: "slug",
                method: "eq",
                value: data,
              },
            ],
          },
        },
      }}
    >
      {({ data }) => {
        return data?.map((entity, index) => {
          return (
            <Category
              key={entity.id}
              isServer={props.isServer}
              variant="overview-default"
              dataSource="props"
              data={entity}
              language={props.language}
            />
          );
        });
      }}
    </Category>
  );
}
