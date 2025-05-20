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
  linkedin: loadIcon("Linkedin"),
  star: loadIcon("Star"),
  framer: loadIcon("Framer"),
  shield: loadIcon("Shield"),
  users: loadIcon("Users"),
  award: loadIcon("Award"),
  globe: loadIcon("Globe"),
  watch: loadIcon("Watch"),
} as const;

export type IIconName = keyof typeof iconLoader;
