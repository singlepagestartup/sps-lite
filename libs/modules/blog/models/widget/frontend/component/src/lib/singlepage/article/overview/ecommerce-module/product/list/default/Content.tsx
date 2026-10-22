import { Component as Article } from "@sps/blog/models/article/frontend/component";
import type { IContentProps } from "./interface";
import { Component as EcommerceModuleProduct } from "@sps/ecommerce/models/product/frontend/component";
import { Component as ArticlesToEcommerceModuleProducts } from "@sps/blog/relations/articles-to-ecommerce-module-products/frontend/component";
export function Component(props: IContentProps) {
  const data = props.articleSlug;
  if (!data) return null;
  return (
    <Article
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
                                  <div key={product.id}>
                                    {props.renderProduct ? (
                                      props.renderProduct({ data: product })
                                    ) : (
                                      <EcommerceModuleProduct
                                        isServer={props.isServer}
                                        variant="default"
                                        dataSource="props"
                                        data={product}
                                        language={props.language}
                                      />
                                    )}
                                  </div>
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
    </Article>
  );
}
