import { Suspense, lazy } from "react";
import { iconLoader, IIconName } from "./icons";

const IconRenderer = ({ name }: { name: IIconName }) => {
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
      <CurrentIcon size={21} />
    </Suspense>
  );
};

export default IconRenderer;
