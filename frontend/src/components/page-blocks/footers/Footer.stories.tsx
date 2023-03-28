import { Meta, StoryObj } from "@storybook/react";
import * as ButtonsArrayStories from "~components/buttons/buttons-arrays/ButtonsArray.stories";
import Footers from ".";

const meta = { component: Footers } satisfies Meta<typeof Footers>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FourColumnsSimple: Story = {
  args: {
    id: 1,
    copyrights: `&copy; 2023 Single Page Startup. All rights reserved.`,
    description: `Making the world a better place through constructing elegant hierarchies.`,
    variant: `four-columns-with-company-mission`,
    locale: `en`,
    logo: {
      id: 273,
      name: `sps-full black.svg`,
      alternativeText: ``,
      caption: null,
      width: 2226,
      height: 340,
      formats: null,
      hash: `sps_full_black_72b5a055d3`,
      ext: `.svg`,
      mime: `image/svg+xml`,
      size: 1.97,
      url: `https://721511.selcdn.ru/sps-lite-rogwild/sps_full_black_72b5a055d3.svg`,
      previewUrl: null,
      provider: `aws-s3`,
      providerMetadata: null,
      createdAt: `2023-02-25T06:24:25.163Z`,
      updatedAt: `2023-02-25T06:24:25.163Z`,
    },
    socialNetworksButtons: Array(3).fill(ButtonsArrayStories.Simple.args),
    policiesButtons: Array(3).fill(ButtonsArrayStories.Simple.args),
    buttonsArrays: Array(3).fill(ButtonsArrayStories.Simple.args),
  },
};

export const FourColumnWithCompanyMission: Story = {
  args: {
    ...FourColumnsSimple.args,
    variant: `four-columns-with-company-mission`,
  },
};

export const FourColumnsSimpleDark: Story = {
  args: {
    ...FourColumnsSimple.args,
    variant: `four-columns-simple-dark`,
  },
};
