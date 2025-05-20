import { IService } from "@/apis/dtos/home-page.type";
import React, { FC, ReactNode } from "react";
import { Check } from "react-feather";
import IconRenderer from "../atoms/icons/IconRenderer";

export type IServiceItemProps = IService;

const ServiceItem: FC<IServiceItemProps> = (props) => {
  const { title, description, items, icon } = props;

  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-cyan-100 hover:shadow-lg">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 shadow-sm">
        <IconRenderer name={icon.icon} />
      </div>
      <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <ul className="space-y-2 text-sm text-gray-600">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-600">
            <Check className="mr-2 h-4 w-4 text-cyan-600" />
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceItem;
