import { Component as Page } from "@sps/host/models/page/frontend/component";
import { Component as BlogModuleArticle } from "@sps/blog/models/article/frontend/component";
import { Component as EcommerceModuleProduct } from "@sps/ecommerce/models/product/frontend/component";
import { Component as ArticlesToEcommerceModuleProducts } from "@sps/blog/relations/articles-to-ecommerce-module-products/frontend/component";
import { Component as EcommerceProduct } from "../../../../../../ecommerce/product";
import { IComponentProps } from "./interface";
export function Component(props: IComponentProps) {
  return (
    <Page
      isServer={props.isServer}
      variant="url-segment-values"
      url={props.url}
    >
      {({ data: segments }) => {
        const data = segments?.["blog.articles.slug"];
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
                  <ArticlesToEcommerceModuleProducts
                    key={entity.id}
                    isServer={props.isServer}
                    variant="find"
                    apiProps={{
                      params: {
                        filters: {
                          and: [
                            {
                              column: "articleId",
                              method: "eq",
                              value: entity.id,
                            },
                          ],
                        },
                      },
                    }}
                  >
                    {({ data: articlesToEcommerceModuleProducts }) => {
                      return (
                        <div className="grid lg:grid-cols-2 gap-4">
                          {articlesToEcommerceModuleProducts?.map(
                            (articleToEcommerceModuleProduct, index) => {
                              return (
                                <EcommerceModuleProduct
                                  key={articleToEcommerceModuleProduct.id}
                                  isServer={props.isServer}
                                  variant="find"
                                  apiProps={{
                                    params: {
                                      filters: {
                                        and: [
                                          {
                                            column: "id",
                                            method: "eq",
                                            value:
                                              articleToEcommerceModuleProduct.ecommerceModuleProductId,
                                          },
                                        ],
                                      },
                                    },
                                  }}
                                >
                                  {({ data: products }) => {
                                    return products?.map((product, index) => {
                                      return (
                                        <EcommerceProduct
                                          key={product.id}
                                          isServer={props.isServer}
                                          variant={props.variant as any}
                                          data={product}
                                          language={props.language}
                                        />
                                      );
                                    });
                                  }}
                                </EcommerceModuleProduct>
                              );
                            },
                          )}
                        </div>
                      );
                    }}
                  </ArticlesToEcommerceModuleProducts>
                );
              });
            }}
          </BlogModuleArticle>
        );
      }}
    </Page>
  );
}
