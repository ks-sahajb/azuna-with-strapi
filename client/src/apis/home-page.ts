import { IHomePageData } from "@/apis/dtos/blocks-component.type";
import { FetchAPIClient } from "@/apis/fetch-api";

const queryObj = {
  populate: {
    blocks: {
      on: {
        "blocks.hero-section": {
          populate: "*",
        },
        "blocks.services": {
          populate: {
            badge: true,
            services: {
              populate: "*",
            },
          },
        },
        "blocks.testimonials": {
          populate: {
            badge: true,
            reviews: {
              populate: "*",
            },
          },
        },
        "blocks.cta": {
          populate: "*",
        },
      },
    },
  },
};

export const getHomePage = () => {
  const api = new FetchAPIClient();

  return api.get<IHomePageData>("/home-page", queryObj);
};
