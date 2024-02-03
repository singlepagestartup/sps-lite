import { Component as PageBlocks } from "../../../../../components/page-blocks/component";
import { Component as Layout } from "../../../../layout/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <Layout isServer={props.isServer}>
      <PageBlocks variant="default" {...props} />
    </Layout>
  );
}
