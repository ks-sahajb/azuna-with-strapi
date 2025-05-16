import { IHomePageData } from "./dtos/home-page.type";
import { FetchAPIClient } from "./fetch-api";

const queryObj = {
  populate: {
    blocks: {
      on: {
        "blocks.hero-section": {
          populate: "*",
        },
        "blocks.navbar": {
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
      },
    },
  },
};

export async function getHomePage() {
  const api = new FetchAPIClient();

  return api.get<IHomePageData>("/home-page", queryObj);
}
