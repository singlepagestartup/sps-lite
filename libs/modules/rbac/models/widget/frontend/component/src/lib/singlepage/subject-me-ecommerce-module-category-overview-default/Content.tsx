import { Component as EcommerceModuleProduct } from "@sps/ecommerce/models/product/frontend/component";
import { Component as EcommerceModuleStore } from "@sps/ecommerce/models/store/frontend/component";
import { Component as RbacSubject } from "@sps/rbac/models/subject/frontend/component";
import { Component as EcommerceModuleCategoriesToProducts } from "@sps/ecommerce/relations/categories-to-products/frontend/component";
import { Component as EcommerceModuleStoresToProducts } from "@sps/ecommerce/relations/stores-to-products/frontend/component";
import { Component as EcommerceModuleCategory } from "@sps/ecommerce/models/category/frontend/component";
import { IContentProps } from "./interface";
export function Component(props: IContentProps) {
  const data = props.ecommerceModuleCategorySlug;
  if (!data) return null;
  return (
    <EcommerceModuleCategory
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
      {({ data: categories }) => {
        return categories?.map((category) => {
          return (
            <EcommerceModuleCategory
              key={category.id}
              isServer={props.isServer}
              variant="overview-default"
              dataSource="props"
              data={category}
              language={props.language}
            >
              <div className="grid lg:grid-cols-2 gap-4">
                <EcommerceModuleCategoriesToProducts
                  isServer={props.isServer}
                  variant="find"
                  apiProps={{
                    params: {
                      filters: {
                        and: [
                          {
                            column: "categoryId",
                            method: "eq",
                            value: category.id,
                          },
                        ],
                      },
                    },
                  }}
                >
                  {({ data }) => {
                    return data?.map((entity) => {
                      return (
                        <EcommerceModuleProduct
                          key={entity.id}
                          isServer={props.isServer}
                          variant="find"
                          apiProps={{
                            params: {
                              filters: {
                                and: [
                                  {
                                    column: "id",
                                    method: "eq",
                                    value: entity.productId,
                                  },
                                ],
                              },
                            },
                          }}
                        >
                          {({ data: products }) => {
                            if (!products) {
                              return;
                            }
                            return products.map((product) => {
                              return (
                                <EcommerceModuleProduct
                                  key={product.id}
                                  isServer={props.isServer}
                                  variant="default"
                                  dataSource="props"
                                  data={product}
                                  language={props.language}
                                >
                                  <EcommerceModuleStoresToProducts
                                    isServer={props.isServer}
                                    variant="find"
                                    apiProps={{
                                      params: {
                                        filters: {
                                          and: [
                                            {
                                              column: "productId",
                                              method: "eq",
                                              value: product.id,
                                            },
                                          ],
                                        },
                                      },
                                    }}
                                  >
                                    {({ data: storesToProducts }) => {
                                      return storesToProducts?.map(
                                        (storeToProduct) => {
                                          return (
                                            <EcommerceModuleStore
                                              key={storeToProduct.id}
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
                                                          storeToProduct.storeId,
                                                      },
                                                    ],
                                                  },
                                                },
                                              }}
                                            >
                                              {({ data: stores }) => {
                                                return stores?.map((store) => {
                                                  return (
                                                    <RbacSubject
                                                      key={store.id}
                                                      isServer={props.isServer}
                                                      product={product}
                                                      store={store}
                                                      language={props.language}
                                                      variant="me-ecommerce-module-product-cart-default"
                                                    />
                                                  );
                                                });
                                              }}
                                            </EcommerceModuleStore>
                                          );
                                        },
                                      );
                                    }}
                                  </EcommerceModuleStoresToProducts>
                                </EcommerceModuleProduct>
                              );
                            });
                          }}
                        </EcommerceModuleProduct>
                      );
                    });
                  }}
                </EcommerceModuleCategoriesToProducts>
              </div>
            </EcommerceModuleCategory>
          );
        });
      }}
    </EcommerceModuleCategory>
  );
}
