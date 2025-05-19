import { Base, IBlocks } from "./blocks-renderer.type";
import {
  IBadge,
  IButton,
  IContact,
  IIcon,
  IItems,
  IStrapiImage,
} from "./shared-component.type";

export type IHomePageData = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: IBlocks[];
};

export type IHeroSection = Base<"blocks.hero-section"> & {
  title: string;
  description: string;
  image: IStrapiImage;
  badge: IBadge;
  button: IButton[];
};

export type IService = {
  id: number;
  title: string;
  description: string;
  icon: IIcon;
  items: IItems[];
};

export type IServicesSection = Base<"blocks.services"> & {
  id: number;
  title: string;
  description: string;
  badge: IBadge;
  services: IService[];
};

export type IReview = {
  id: number;
  author: string;
  company: string;
  profile?: IStrapiImage;
  text: string;
};

export type ITestimonialsSection = Base<"blocks.testimonials"> & {
  id: number;
  title: string;
  description: string;
  badge: IBadge;
  reviews: IReview[];
};

export type ICTASection = Base<"blocks.cta"> & {
  id: number;
  title: string;
  description: string;
  badge: IBadge;
  contact: IContact;
};
