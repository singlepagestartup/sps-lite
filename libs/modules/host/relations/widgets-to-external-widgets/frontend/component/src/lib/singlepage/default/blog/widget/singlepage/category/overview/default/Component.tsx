import { Component as BlogModuleCategory } from "@sps/blog/models/category/frontend/component";
import { IComponentProps } from "./interface";
export function Component(props: IComponentProps) {
  const data = props.routeParams?.["blog.categories.slug"];
  if (!data) {
    return;
  }
  return (
    <BlogModuleCategory
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
            <BlogModuleCategory
              key={entity.id}
              isServer={props.isServer}
              variant="overview-default"
              data={entity}
              language={props.language}
            />
          );
        });
      }}
    </BlogModuleCategory>
  );
}
