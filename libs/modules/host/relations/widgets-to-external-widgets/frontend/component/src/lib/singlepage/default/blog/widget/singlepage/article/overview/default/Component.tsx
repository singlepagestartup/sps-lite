import { Component as BlogModuleArticle } from "@sps/blog/models/article/frontend/component";
import { IComponentProps } from "./interface";
export function Component(props: IComponentProps) {
  const data = props.routeParams?.["blog.articles.slug"];
  if (!data) {
    return;
  }
  return (
    <BlogModuleArticle
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
            <BlogModuleArticle
              key={entity.id}
              isServer={props.isServer}
              variant="overview-default"
              data={entity}
              language={props.language}
            />
          );
        });
      }}
    </BlogModuleArticle>
  );
}
