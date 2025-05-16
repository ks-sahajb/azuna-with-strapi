import { IGlobalsData } from "./dtos/globals.type";
import { FetchAPIClient } from "./fetch-api";

const queryObj = {
  populate: {
    blocks: {
      on: {
        "blocks.navbar": {
          populate: "*",
        },
        "blocks.footer": {
          populate: "*",
        },
      },
    },
  },
};

export async function getGlobals() {
  const api = new FetchAPIClient();

  return await api.get<IGlobalsData>("/global", queryObj);
}
