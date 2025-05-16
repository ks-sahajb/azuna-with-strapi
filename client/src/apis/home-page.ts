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
      },
    },
  },
};

export async function getHomePage() {
  const api = new FetchAPIClient();

  return api.get<IHomePageData>("/home-page", queryObj);
}

