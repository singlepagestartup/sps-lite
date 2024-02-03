import { PageBlocks } from "../../../../../components/page-blocks/omponent";
import { Component as Layout } from "../../../../layout/component";
import { IComponentPropsExtended } from "../../interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <Layout isServer={props.isServer}>
      <PageBlocks {...props} />
    </Layout>
  );
}
