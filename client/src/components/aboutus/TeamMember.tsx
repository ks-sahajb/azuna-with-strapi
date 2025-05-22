import { FC } from "react";

import { ITeamMember } from "@/apis/dtos/blocks-component.type";

import IconRenderer from "@/components/atoms/icons/IconRenderer";
import BaseStrapiImage from "@/components/ui/BaseStrapiImage";

// ======================= Type Definitions =======================

export type ITeamMemeberProps = ITeamMember;

/**
 * TeamMember component
 */
const TeamMember: FC<ITeamMemeberProps> = (props) => {
  const { image, name, position, info, icon } = props;

  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-cyan-100 hover:shadow-lg">
      {/* Team member image with overlay and name/position */}
      <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
        {image && (
          <BaseStrapiImage
            {...image}
            imageProps={{
              className:
                "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-cyan-200">{position}</p>
        </div>
      </div>
      {/* Team member info */}
      <p className="text-gray-600">{info}</p>
      {/* Icon link (e.g., social or contact) */}
      <div className="mt-4 flex space-x-3">
        <a href="#" className="text-cyan-600 hover:text-cyan-700">
          {icon && <IconRenderer name={icon.icon} />}
        </a>
      </div>
    </div>
  );
};

export default TeamMember;
