// ================= Shared Types =================
import {
  IBadge,
  IButton,
  IContact,
  IIcon,
  IItems,
  IStrapiImage,
} from "@/apis/dtos/shared-component.type";

// ================= Block Types =================
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

type IBase<
  T extends IComponentType,
  D extends object = Record<string, unknown>,
> = {
  id: number;
  __component: T;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  data?: D;
};

// ================= Project Details Page Types =================
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

// ================= Home Page Types =================
export type IHomePageData = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: IBlocks[];
};

export type IHeroSection = IBase<"blocks.hero-section"> & {
  title: string;
  description: string;
  image?: IStrapiImage;
  badge: IBadge;
  button?: IButton[];
};

export type IService = {
  id: number;
  title: string;
  description: string;
  icon: IIcon;
  items: IItems[];
};

export type IServicesSection = IBase<"blocks.services"> & {
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

export type ITestimonialsSection = IBase<"blocks.testimonials"> & {
  id: number;
  title: string;
  description: string;
  badge: IBadge;
  reviews: IReview[];
};

export type ICTASection = IBase<"blocks.cta"> & {
  id: number;
  title: string;
  description: string;
  badge: IBadge;
  contact: IContact;
};

// ================= About Us Page Types =================
export type IAboutPage = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: IAboutBlocks[];
};

export type IFeature = {
  id: number;
  title: string;
  description: string;
  icon?: IIcon;
};

export type ITab = {
  id: number;
  title: string;
  heading: string;
  description: string;
};

export type ITeamMember = {
  id: number;
  icon?: IIcon;
  image?: IStrapiImage;
  info: string;
  name: string;
  position: string;
};

export type ITimeLine = {
  id: number;
  description: string;
  title: string;
  year: string;
  icon?: IIcon;
};

type IAboutType =
  | "blocks.misson-tab"
  | "blocks.team-tab"
  | "blocks.history-tab";

export type IAboutBlocks = IMissionTab | IHistoryTab | ITeamTab | IHeroSection;

export type Base<T extends IAboutType> = {
  id: number;
  __component: T;
};

export type IMissionTab = Base<"blocks.misson-tab"> & {
  Tab: ITab;
  Features: IFeature[];
  image: IStrapiImage;
};

export type ITeamTab = Base<"blocks.team-tab"> & {
  Tab: ITab;
  Members: ITeamMember[];
};

export type IHistoryTab = Base<"blocks.history-tab"> & {
  Tab: ITab;
  Timeline: ITimeLine[];
};

// ================= Projects Page Types =================
export type IProjectsPage = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: IBlocks[];
};

type ITag = {
  id: number;
  text: string;
};

export type IProjectCard = {
  title: string;
  description: string;
  badge: IBadge;
  tags: ITag[];
  button: IButton;
  image?: IStrapiImage;
};

export type IProject = IBase<"blocks.project-section"> & {
  Projects: IProjectCard[];
};
