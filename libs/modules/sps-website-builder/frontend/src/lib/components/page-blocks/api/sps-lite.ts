import { BACKEND_URL, transformResponseItem } from "@sps/utils";
import QueryString from "qs";

export const api = {
  findByPageIdAndComponentParams: async (params: {
    id: number;
    componentParams: any;
    populate: any;
  }) => {
    const { id, populate, componentParams } = params;

    const stringifiedQuery = QueryString.stringify(
      {
        populate: {
          page_blocks: {
            populate,
          },
        },
      },
      {
        encodeValuesOnly: true,
      },
    );

    const res = await fetch(
      `${BACKEND_URL}/api/sps-website-builder/pages/${id}?${stringifiedQuery}`,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const json = await res.json();

    const transformedData = transformResponseItem(json);

    const pageBlockData = transformedData?.pageBlocks.find(
      (pb) =>
        pb.id === componentParams.id &&
        pb.__component === componentParams.__component,
    );

    return pageBlockData;
  },
  findByNavbarIdAndComponentParams: async (params: {
    id: number;
    componentParams: any;
    populate: any;
  }) => {
    const { id, populate, componentParams } = params;

    const stringifiedQuery = QueryString.stringify(
      {
        populate: {
          page_blocks: {
            populate,
          },
        },
      },
      {
        encodeValuesOnly: true,
      },
    );

    const res = await fetch(
      `${BACKEND_URL}/api/sps-website-builder/navbars/${id}?${stringifiedQuery}`,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const json = await res.json();

    const transformedData = transformResponseItem(json);

    const pageBlockData = transformedData?.pageBlocks.find(
      (pb) =>
        pb.id === componentParams.id &&
        pb.__component === componentParams.__component,
    );

    return pageBlockData;
  },
  findByFooterIdAndComponentParams: async (params: {
    id: number;
    componentParams: any;
    populate: any;
  }) => {
    const { id, populate, componentParams } = params;

    const stringifiedQuery = QueryString.stringify(
      {
        populate: {
          page_blocks: {
            populate,
          },
        },
      },
      {
        encodeValuesOnly: true,
      },
    );

    const res = await fetch(
      `${BACKEND_URL}/api/sps-website-builder/footers/${id}?${stringifiedQuery}`,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const json = await res.json();

    const transformedData = transformResponseItem(json);

    const pageBlockData = transformedData?.pageBlocks.find(
      (pb) =>
        pb.id === componentParams.id &&
        pb.__component === componentParams.__component,
    );

    return pageBlockData;
  },
};
