import {
  ICTASection,
  IHeroSection,
  IReview,
  IServicesSection,
  ITestimonialsSection,
} from "./home-page.type";
import { IProject, ITag } from "./projects-page.type";
import { IBadge, IStrapiImage } from "./shared-component.type";

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

export type IProjectDetail = {
  id: number;
  title: string;
  year: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  results: ITag[];
  testimonial: IReview;
  badge: IBadge;
  tags: ITag[];
  gallary: IStrapiImage[];
  hero_image: IStrapiImage;
  project_id: string;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
