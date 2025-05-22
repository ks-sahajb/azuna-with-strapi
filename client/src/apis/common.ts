import { ICommonData } from "@/apis/dtos/common.type";
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

export const getCommons = () => {
  const api = new FetchAPIClient();

  return api.get<ICommonData>("/global", queryObj);
};
