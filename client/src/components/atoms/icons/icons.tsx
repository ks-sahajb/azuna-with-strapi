import dynamic from "next/dynamic";

// ======================= Icon Loader =======================
// Helper to dynamically load icons from react-feather by name
const loadIcon = (iconName: keyof typeof import("react-feather")) => {
  return dynamic(() => import("react-feather").then((mod) => mod[iconName]));
};

// ======================= Icon Map =======================
// Map of icon names to dynamic icon components
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

// ======================= Type Definitions =======================

// ======================= Types =======================
// Type for icon names
export type IIconName = keyof typeof iconLoader;
