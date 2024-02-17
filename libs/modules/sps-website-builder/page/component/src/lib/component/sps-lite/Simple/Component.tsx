// import { Component as PageBlocks } from "../../../../../components/page-blocks/component";
// import { Component as Layout } from "../../../../layout/component";
import { IComponentPropsExtended } from "./interface";
import { Component as HeroSectionBlock } from "@sps/sps-website-builder-hero-section-block-component";

export function Component(props: IComponentPropsExtended) {
  if (props.data.pageBlocks) {
    return props.data.pageBlocks.map((block, index) => {
      if (block.__component === "page-blocks.hero-section-block") {
        return (
          <div key={index} className="w-full py-20">
            <HeroSectionBlock
              isServer={true}
              variant={block.variant}
              data={block}
            />
          </div>
        );
      }
    });
  }

  return <></>;
}
