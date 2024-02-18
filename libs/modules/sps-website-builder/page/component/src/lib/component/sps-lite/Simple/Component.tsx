import { Component as PageBlocks } from "@sps/sps-website-builder-page-block-component";
import { Component as Layout } from "@sps/sps-website-builder-layout-component";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <Layout isServer={props.isServer}>
      <PageBlocks {...props} variant="default" />
    </Layout>
  );
}
