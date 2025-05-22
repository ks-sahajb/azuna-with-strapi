import { FC } from "react";

import { ITimeLine } from "@/apis/dtos/blocks-component.type";

import IconRenderer from "@/components/atoms/icons/IconRenderer";

export type ITimeLineItemProps = ITimeLine;

/**
 * TimelineItem component
 * Renders a single item in the vertical timeline, including icon, year, title, and description.
 */
const TimelineItem: FC<ITimeLineItemProps> = (props) => {
  const { icon, title, description, year } = props;

  return (
    <div className="relative pl-12 md:flex md:items-center md:justify-between md:odd:flex-row-reverse md:pl-0">
      {/* Timeline icon */}
      <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 shadow-sm md:left-1/2 md:-ml-4">
        {icon && (
          <IconRenderer
            name={icon.icon}
            iconProps={{ className: "text-cyan-600" }}
          />
        )}
      </div>
      {/* Year label */}
      <div className="md:w-5/12 md:px-4">
        <div className="text-sm font-semibold text-cyan-600 md:text-right">
          {year}
        </div>
      </div>
      {/* Timeline content */}
      <div className="mt-2 md:mt-0 md:w-5/12">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
