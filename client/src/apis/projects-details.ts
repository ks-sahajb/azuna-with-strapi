import { IProjectDetail } from "@/apis/dtos/blocks-component.type";
import { FetchAPIClient } from "@/apis/fetch-api";

export const getProjectDetails = async (id: number) => {
  try {
    const api = new FetchAPIClient();

    const queryObj = {
      filters: {
        project_id: {
          $eq: id,
        },
      },
      populate: "*",
    };

    return api.get<IProjectDetail[]>("/project-details", queryObj);
  } catch (err) {
    console.error("Failed to fetch project details:", err);
    return null;
  }
};
