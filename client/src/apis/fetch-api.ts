import qs from "qs";

import { getStrapiURL } from "@/apis/api-helper";
import { IApiResponse } from "@/apis/dtos/common.type";
import { getLocale } from "@/apis/getLocale";

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
      const locale = await getLocale();

      const mergedOptions: RequestInit = {
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
      }&locale=${locale}`;

      let response = await fetch(requestUrl, mergedOptions);

      const data: IApiResponse<T> = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  }
}
