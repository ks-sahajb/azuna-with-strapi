import { IconProps } from "react-feather";

import { FC, Suspense } from "react";

import { IIconName, iconLoader } from "@/components/atoms/icons/icons";

export type IIconRendererProps = { name: IIconName; iconProps?: IconProps };

const IconRenderer: FC<IIconRendererProps> = (props) => {
  const { name, iconProps } = props;

  const CurrentIcon = iconLoader[name];

  if (!CurrentIcon) {
    return (
      <div
        title="Icon not found"
        className="w-[21px] h-[21px] bg-red-200 text-red-500 text-xs flex items-center justify-center rounded"
      >
        ?
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="w-[21px] h-[21px] animate-pulse bg-gray-300 rounded" />
      }
    >
      <CurrentIcon size={21} {...iconProps} />
    </Suspense>
  );
};

export default IconRenderer;
