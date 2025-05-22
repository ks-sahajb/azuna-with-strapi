// ================= Common Types =================
import { IFooter, INavbar } from "@/apis/dtos/layout-component.type";

// ================= ICommonData Type =================
export type ICommonData = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: [INavbar, IFooter];
};

export type IApiResponse<T> = {
  data: T;
  meta: Record<string, unknown>;
};
