import { IComponentPropsExtended } from "./interface";
// import { Component as User } from "@sps/sps-rbac-models-user-frontend-component";
// import { Component as PageSpsLiteEditor } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-editor";
import { Component as PagesToLayouts } from "@sps/sps-website-builder-relations-pages-to-layouts-frontend-component";
import { Component as PagesToWidgets } from "@sps/sps-website-builder-relations-pages-to-widgets-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <section
      data-module="sps-website-builder"
      data-model="page"
      data-variant="default"
    >
      {/* {props.isEditing ? (
        <PageSpsLiteEditor {...props} variant="editor" />
      ) : null} */}

      {/* <User isServer={false} variant="auth-wrapper"> */}
      {props.data.pagesToLayouts?.length ? (
        <PagesToLayouts
          isServer={props.isServer}
          variant="get-layout"
          data={props.data.pagesToLayouts[0]}
        >
          {props.data.pagesToWidgets?.map((widget, index) => {
            return (
              <PagesToWidgets
                key={index}
                isServer={props.isServer}
                variant="default"
                data={widget}
              />
            );
          })}
        </PagesToLayouts>
      ) : null}

      {/* {props.data?.layouts && props.data.layouts?.length ? (
          <Layout
            isServer={props.isServer}
            data={props.data.layouts[0]}
            variant={props.data.layouts[0].variant}
          >
            <div>
              <div className="w-full py-20 text-center">
                <h1 className="text-4xl font-bold">{props.data.title}</h1>
              </div>
              <PageBlocks {...props} variant="default" />
            </div>
          </Layout>
        ) : (
          <div className="w-full py-20 text-center">
            <h1 className="text-4xl font-bold">{props.data.title}</h1>
          </div>
        )} */}
      {/* </User> */}
    </section>
  );
}
5;
