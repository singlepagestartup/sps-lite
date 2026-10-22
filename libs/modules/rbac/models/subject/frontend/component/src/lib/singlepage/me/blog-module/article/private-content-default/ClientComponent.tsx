"use client";

import { Component as Subject } from "@sps/rbac/models/subject/frontend/component";
import { Component as BlogModuleArticlesToWebsiteBuilderModuleWidgets } from "@sps/blog/relations/articles-to-website-builder-module-widgets/frontend/component";
import type { IComponentProps } from "./interface";

export function Component(props: IComponentProps) {
  return (
    <Subject
      isServer={false}
      variant="authentication-is-authorized-wrapper-default"
      apiProps={{
        params: {
          permission: {
            method: "GET",
            route: "/api/blog/articles-to-website-builder-module-widgets",
          },
        },
      }}
      fallback={<div className="p-5 bg-blue-400">Not authorized</div>}
    >
      <BlogModuleArticlesToWebsiteBuilderModuleWidgets
        isServer={false}
        variant="find"
        apiProps={{
          params: {
            filters: {
              and: [
                {
                  column: "articleId",
                  method: "eq",
                  value: props.blogModuleArticle.id,
                },
              ],
            },
          },
        }}
      >
        {({ data }) => {
          return data?.map((entity, index) => {
            return (
              <BlogModuleArticlesToWebsiteBuilderModuleWidgets
                key={index}
                isServer={false}
                variant={entity.variant as any}
                data={entity}
                language={props.language}
              />
            );
          });
        }}
      </BlogModuleArticlesToWebsiteBuilderModuleWidgets>
    </Subject>
  );
}
