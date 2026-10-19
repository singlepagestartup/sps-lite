import type { IExternalWidgetProps } from "../interface";
import { Component as BlogModuleWidget } from "@sps/blog/models/widget/frontend/component";
import { Component as RbacModuleSubject } from "@sps/rbac/models/subject/frontend/component";
export function Component(props: IExternalWidgetProps) {
  return (
    <BlogModuleWidget
      isServer={props.isServer}
      variant="find"
      apiProps={{
        params: {
          filters: {
            and: [
              {
                column: "id",
                method: "eq",
                value: props.data.externalWidgetId,
              },
            ],
          },
        },
      }}
    >
      {({ data }) =>
        data?.map((entity) => (
          <BlogModuleWidget
            key={entity.id}
            isServer={props.isServer}
            dataSource="props"
            data={entity}
            language={props.language}
            routeParams={props.routeParams}
            variant={entity.variant as any}
            renderPrivateContent={({ data }) => (
              <RbacModuleSubject
                isServer={props.isServer}
                variant="me-blog-module-article-private-content-default"
                blogModuleArticle={data}
                language={props.language}
              />
            )}
            renderProduct={({ data }) => (
              <RbacModuleSubject
                isServer={props.isServer}
                variant="me-ecommerce-module-product-card-default"
                product={data}
                language={props.language}
              />
            )}
          />
        ))
      }
    </BlogModuleWidget>
  );
}
