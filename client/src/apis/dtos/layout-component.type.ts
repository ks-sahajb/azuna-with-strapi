// ================= Layout Component Types =================
import { IContact, ILink, ILogo } from "@/apis/dtos/shared-component.type";

// ================= Block Base Type =================
type IBlockBase<T extends string> = {
  id: number;
  __component: T;
};

// ================= Navbar Type =================
export type INavbar = IBlockBase<"blocks.navbar"> & {
  logo: ILogo;
  link: ILink[];
};

// ================= Footer Type =================
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
