import { IComponentPropsExtended } from "../../interface";
import { FormField } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  return (
    <>
      <FormField
        {...props}
        data-component="elements.input"
        ui="sps"
        label={"sps | " + props.label || undefined}
        type="file"
        multiple={true}
        initialValue={[
          {
            id: 33,
            name: "pexels_karolina_grabowska_5882683_3f2b11722e.jpg",
            alternativeText: null,
            caption: null,
            width: 1280,
            height: 853,
            formats: {
              large: {
                ext: ".jpg",
                url: "https://spslitedev.s3.eu-central-1.amazonaws.com/large_pexels_karolina_grabowska_5882683_3f2b11722e_b99e48cb86.jpg",
                hash: "large_pexels_karolina_grabowska_5882683_3f2b11722e_b99e48cb86",
                mime: "image/jpeg",
                name: "large_pexels_karolina_grabowska_5882683_3f2b11722e.jpg",
                path: null,
                size: 72.41,
                width: 1000,
                height: 666,
              },
              small: {
                ext: ".jpg",
                url: "https://spslitedev.s3.eu-central-1.amazonaws.com/small_pexels_karolina_grabowska_5882683_3f2b11722e_b99e48cb86.jpg",
                hash: "small_pexels_karolina_grabowska_5882683_3f2b11722e_b99e48cb86",
                mime: "image/jpeg",
                name: "small_pexels_karolina_grabowska_5882683_3f2b11722e.jpg",
                path: null,
                size: 25.51,
                width: 500,
                height: 333,
              },
              medium: {
                ext: ".jpg",
                url: "https://spslitedev.s3.eu-central-1.amazonaws.com/medium_pexels_karolina_grabowska_5882683_3f2b11722e_b99e48cb86.jpg",
                hash: "medium_pexels_karolina_grabowska_5882683_3f2b11722e_b99e48cb86",
                mime: "image/jpeg",
                name: "medium_pexels_karolina_grabowska_5882683_3f2b11722e.jpg",
                path: null,
                size: 46.24,
                width: 750,
                height: 500,
              },
              thumbnail: {
                ext: ".jpg",
                url: "https://spslitedev.s3.eu-central-1.amazonaws.com/thumbnail_pexels_karolina_grabowska_5882683_3f2b11722e_b99e48cb86.jpg",
                hash: "thumbnail_pexels_karolina_grabowska_5882683_3f2b11722e_b99e48cb86",
                mime: "image/jpeg",
                name: "thumbnail_pexels_karolina_grabowska_5882683_3f2b11722e.jpg",
                path: null,
                size: 8.01,
                width: 234,
                height: 156,
              },
            },
            hash: "pexels_karolina_grabowska_5882683_3f2b11722e_b99e48cb86",
            ext: ".jpg",
            mime: "image/jpeg",
            size: 109.43,
            url: "https://spslitedev.s3.eu-central-1.amazonaws.com/pexels_karolina_grabowska_5882683_3f2b11722e_b99e48cb86.jpg",
            previewUrl: null,
            provider: "aws-s3",
            provider_metadata: null,
            createdAt: "2024-01-09T22:27:46.594Z",
            updatedAt: "2024-01-09T22:27:46.594Z",
          },
        ]}
      />
      {/* <FormField
      {...props}
      data-component="elements.input"
      ui="shadcn"
      label={"shadcn | " + props.label || undefined}
      type="date"
    /> */}
    </>
  );
}
