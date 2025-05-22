import { IGlobalsData } from "@/apis/dtos/globals.type";
import { FetchAPIClient } from "@/apis/fetch-api";

const queryObj = {
  populate: {
    blocks: {
      on: {
        "blocks.navbar": {
          populate: "*",
        },
        "blocks.footer": {
          populate: {
            links: true,
            externallinks: {
              populate: "*",
            },
            logo: true,
            contact: true,
          },
        },
      },
    },
  },
};

export const getGlobals = () => {
  const api = new FetchAPIClient();

  return api.get<IGlobalsData>("/global", queryObj);
};
