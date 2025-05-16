import { IHeroSection } from "./home-page.type";

export type IComponentType = "blocks.hero-section";

export type IBlocks = IHeroSection;

export type Base<
  T extends IComponentType,
  D extends object = Record<string, unknown>
> = {
  id: number;
  __component: T;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  data?: D;
};

export type IBlockBase<T extends string> = {
  id: number;
  __component: T;
};
