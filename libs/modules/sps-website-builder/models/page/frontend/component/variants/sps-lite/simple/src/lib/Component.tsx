import { Component as PageBlocks } from "@sps/sps-website-builder-page-blocks-component";
import { Component as Layout } from "@sps/sps-website-builder-models-layout-frontend-component";
import { IComponentPropsExtended } from "./interface";
import { Component as User } from "@sps/sps-rbac-models-user-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <section
      data-module="sps-website-builder"
      data-model="page"
      data-variant="simple"
    >
      <User isServer={false} variant="auth-wrapper">
        {props.data?.layout ? (
          <Layout
            isServer={props.isServer}
            data={props.data.layout}
            variant={props.data.layout.variant}
          >
            <PageBlocks {...props} variant="default" />
          </Layout>
        ) : null}
      </User>
    </section>
  );
}
5;
