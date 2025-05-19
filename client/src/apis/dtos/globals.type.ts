import { IBlockBase } from "./blocks-renderer.type";
import { IContact, ILink, ILogo } from "./shared-component.type";

export type INavbar = IBlockBase<"blocks.navbar"> & {
  logo: ILogo;
  link: ILink[];
};

export type IFooter = IBlockBase<"blocks.footer"> & {
  id: number;
  description: string;
  linktitle: string;
  links: ILink[];
  contact: IContact;
  logo: ILogo;
  externallinks: ILink[];
  copyright: string;
  ctitle?: string;
};

export type IGlobalsData = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: [INavbar, IFooter];
};
