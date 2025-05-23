import { Check } from "react-feather";

import { FC } from "react";

import { IService } from "@/apis/dtos/blocks-component.type";

import IconRenderer from "@/components/atoms/icons/IconRenderer";

export type IServiceItemProps = IService;

// ======================= Component =====================
/**
 * ServiceItem component
 * Renders a single service item with icon, title, and description.
 */

const ServiceItem: FC<IServiceItemProps> = (props) => {
  const { title, description, items, icon } = props;

  return (
    <div className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-cyan-100 hover:shadow-lg">
      {/* Icon */}
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 shadow-sm">
        <IconRenderer name={icon.icon} />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>

      {/* Description */}
      <p className="mb-4 text-gray-600">{description}</p>

      {/* List of Items */}
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
