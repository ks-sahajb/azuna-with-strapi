import {
  ICTASection,
  IHeroSection,
  IServicesSection,
  ITestimonialsSection,
} from "./home-page.type";

export type IComponentType =
  | "blocks.hero-section"
  | "blocks.services"
  | "blocks.testimonials"
  | "blocks.cta";

export type IBlocks =
  | IHeroSection
  | IServicesSection
  | ITestimonialsSection
  | ICTASection;

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
