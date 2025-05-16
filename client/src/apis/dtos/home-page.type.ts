import { Base, IBlocks } from "./blocks-renderer.type";
import { IBadge, IButton, IStrapiImage } from "./shared-component.type";

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
