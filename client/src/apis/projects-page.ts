import { IProjectsPage } from "./dtos/projects-page.type";
import { FetchAPIClient } from "./fetch-api";

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

export async function getProjectsPage() {
  const api = new FetchAPIClient();
  return api.get<IProjectsPage>("/projects-page", queryObj);
}
