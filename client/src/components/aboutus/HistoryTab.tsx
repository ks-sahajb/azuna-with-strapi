import { IHistoryTab } from "@/apis/dtos/about-page.type";
import React, { FC } from "react";
import IconRenderer from "../atoms/icons/IconRenderer";
import TimelineItem from "./TimelineItem";

export type IHistoryTabProps = { data: IHistoryTab };

const HistoryTab: FC<IHistoryTabProps> = ({ data }) => {
  const {
    Tab: { title, description },
    Timeline,
  } = data;

  return (
    <section className="space-y-12">
      <div className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 md:left-1/2"></div>
        <div className="space-y-8">
          {Timeline.map((item) => (
            <TimelineItem {...item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryTab;
