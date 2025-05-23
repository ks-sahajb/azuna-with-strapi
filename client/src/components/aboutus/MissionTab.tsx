import { FC } from "react";

import { IMissionTab } from "@/apis/dtos/blocks-component.type";

import IconRenderer from "@/components/atoms/icons/IconRenderer";
import BaseStrapiImage from "@/components/ui/BaseStrapiImage";

export type IBaseMissionTab = { data: IMissionTab };

/**
 * MissionTab component
 * Renders the mission section for the About Us page.
 */
const MissionTab: FC<IBaseMissionTab> = (props) => {
  const {
    Tab: { description, title },
    Features,
    image,
  } = props.data;
  return (
    <section className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      {/* Section header and features */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
        <p className="text-lg text-gray-600">{description}</p>
        <div className="space-y-4">
          {/* Render each feature item */}
          {Features.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 shadow-sm">
                {/* Render icon if present */}
                {item.icon?.icon && <IconRenderer name={item.icon?.icon} />}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Image section */}
      <div className="relative mt-8 lg:mt-0">
        <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-cyan-200 to-cyan-50 opacity-75 blur-xl"></div>
        <div className="relative overflow-hidden rounded-xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
          {/* Render the main image */}
          <BaseStrapiImage
            {...image}
            imageProps={{
              className: "relative aspect-square w-full object-cover",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default MissionTab;

// ======================= Type Definitions =======================
