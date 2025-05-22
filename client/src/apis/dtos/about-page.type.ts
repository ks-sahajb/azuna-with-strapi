import { IHeroSection } from "@/apis/dtos/home-page.type";
import { IIcon, IStrapiImage } from "@/apis/dtos/shared-component.type";

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
