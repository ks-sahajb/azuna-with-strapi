import { IBlocks, Base } from "@/apis/dtos/blocks-renderer.type";
import { IBadge, IButton, IStrapiImage } from "@/apis/dtos/shared-component.type";

export type IProjectsPage = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: IBlocks[];
};

export type ITag = {
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

export type IProject = Base<"blocks.project-section"> & {
  Projects: IProjectCard[];
};
