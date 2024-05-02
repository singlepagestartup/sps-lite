import { Component as PageBlocks } from "@sps/sps-website-builder-page-blocks-component";
import { Component as Layout } from "@sps/sps-website-builder-models-layout-frontend-component";
import { IComponentPropsExtended } from "./interface";
import { Component as User } from "@sps/sps-rbac-models-user-frontend-component";
import { Component as PageSpsLiteEditor } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-editor";

export function Component(props: IComponentPropsExtended) {
  return (
    <section
      data-module="sps-website-builder"
      data-model="page"
      data-variant="simple"
    >
      {props.isEditing ? (
        <PageSpsLiteEditor {...props} variant="editor" />
      ) : null}
      <div className="w-full py-20 text-center">
        <h1 className="text-4xl font-bold">{props.data.title}</h1>
      </div>
      <User isServer={false} variant="auth-wrapper">
        {props.data?.layouts && props.data.layouts?.length ? (
          <Layout
            isServer={props.isServer}
            data={props.data.layouts[0]}
            variant={props.data.layouts[0].variant}
          >
            <PageBlocks {...props} variant="default" />
          </Layout>
        ) : null}
      </User>
    </section>
  );
}
5;
