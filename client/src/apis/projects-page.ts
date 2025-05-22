import { IProjectsPage } from "@/apis/dtos/blocks-component.type";
import { FetchAPIClient } from "@/apis/fetch-api";

const queryObj = {
  populate: {
    blocks: {
      on: {
        "blocks.hero-section": {
          populate: "*",
        },
        "blocks.project-section": {
          populate: {
            Projects: {
              populate: "*",
            },
          },
        },
      },
    },
  },
};

export const getProjectsPage = () => {
  const api = new FetchAPIClient();
  return api.get<IProjectsPage>("/projects-page", queryObj);
};
