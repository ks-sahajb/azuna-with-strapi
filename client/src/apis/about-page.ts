import { IAboutPage } from "@/apis/dtos/about-page.type";
import { FetchAPIClient } from "@/apis/fetch-api";

const queryObj = {
  populate: {
    blocks: {
      on: {
        "blocks.hero-section": {
          populate: "*",
        },
        "blocks.misson-tab": {
          populate: {
            Tab: true,
            image: true,
            Features: {
              populate: "*",
            },
          },
        },
        "blocks.team-tab": {
          populate: {
            Members: {
              populate: "*",
            },
            Tab: true,
          },
        },
        "blocks.history-tab": {
          populate: {
            Tab: true,
            Timeline: {
              populate: "*",
            },
          },
        },
      },
    },
  },
};

export async function getAboutPage() {
  const api = new FetchAPIClient();

  return api.get<IAboutPage>("/about-us", queryObj);
}
