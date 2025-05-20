import {
  ICTASection,
  IHeroSection,
  IServicesSection,
  ITestimonialsSection,
} from "./home-page.type";
import { IProject } from "./projects-page.type";

export type IComponentType =
  | "blocks.hero-section"
  | "blocks.services"
  | "blocks.testimonials"
  | "blocks.cta"
  | "blocks.project-section";

export type IBlocks =
  | IHeroSection
  | IServicesSection
  | ITestimonialsSection
  | ICTASection
  | IProject;

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
