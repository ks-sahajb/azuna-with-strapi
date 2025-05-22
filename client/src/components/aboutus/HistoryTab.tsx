import { FC } from "react";

import { IHistoryTab } from "@/apis/dtos/blocks-component.type";

import TimelineItem from "@/components/aboutus/TimelineItem";

export type IHistoryTabProps = { data: IHistoryTab };

/**
 * HistoryTab component
 * Renders the history timeline section for the About Us page.
 * Displays a section title, description, and a vertical timeline of events.
 */
const HistoryTab: FC<IHistoryTabProps> = (props) => {
  const {
    Tab: { title, description },
    Timeline,
  } = props.data;

  return (
    <section className="space-y-12">
      {/* Section header */}
      <div className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
      {/* Timeline visualization */}
      <div className="relative">
        {/* Vertical line for timeline */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 md:left-1/2"></div>
        <div className="space-y-8">
          {/* Render each timeline item */}
          {Timeline.map((item) => (
            <TimelineItem {...item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryTab;

// ======================= Type Definitions =======================
