import { IIconName } from "@/components/atoms/icons/icons";

export type IImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};

export type IImageFormats = {
  thumbnail?: IImageFormat;
  small?: IImageFormat;
  medium?: IImageFormat;
  large?: IImageFormat;
};

export type IStrapiImage = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: IImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type IBadge = {
  id: number;
  text: string;
};

export type IButton = {
  id: number;
  text: string;
  href: string;
};

export type ILink = {
  id: number;
  text: string;
  href: string;
  icon?: IIcon;
};

export type ILogo = {
  id: number;
  text: string;
};

export type IContact = {
  address: string;
  email: string;
  mobile: string;
};

export type IItems = {
  id: number;
  text: string;
};

export type IApiResponse<T> = {
  data: T;
  meta: Record<string, unknown>;
};

export type IIcon = {
  icon: IIconName;
};
