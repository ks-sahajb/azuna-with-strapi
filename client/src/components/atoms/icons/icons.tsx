import dynamic from "next/dynamic";

const loadIcon = (iconName: keyof typeof import("react-feather")) => {
  return dynamic(() => import("react-feather").then((mod) => mod[iconName]));
};

export const iconLoader = {
  code: loadIcon("Code"),
  shopping_bag: loadIcon("ShoppingBag"),
  smartphone: loadIcon("Smartphone"),
  aperture: loadIcon("Aperture"),
  layers: loadIcon("Layers"),
  setting: loadIcon("Settings"),
  facebook: loadIcon("Facebook"),
  instagram: loadIcon("Instagram"),
  star: loadIcon("Star"),
} as const;

export type IIconName = keyof typeof iconLoader;
