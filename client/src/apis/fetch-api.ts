import { getStrapiURL } from "@/apis/api-helper";
import qs from "qs";

import { IApiResponse } from "@/apis/dtos/shared-component.type";

export class FetchAPIClient {
  private baseHeaders = {
    "Content-Type": "application/json",
  };

  private basePath: string;

  constructor(path?: string) {
    this.basePath = path ? path : "/api";
  }

  async get<T>(path: string, urlParamsObject = {}, options: RequestInit = {}) {
    try {
      const mergedOptions = {
        next: { revalidate: 60 },
        headers: {
          ...this.baseHeaders,
          ...(options.headers || {}),
        },
        ...options,
      };

      const queryString = qs.stringify(urlParamsObject);

      const requestUrl = `${getStrapiURL(`${this.basePath}${path}`)}${
        queryString ? `?${queryString}` : ""
      }`;

      const response = await fetch(requestUrl, mergedOptions);

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data: IApiResponse<T> = await response.json();
      return data;
    } catch (error) {
      throw new Error(
        `Please check if your server is running and you set all the required tokens.`,
      );
    }
  }
}
